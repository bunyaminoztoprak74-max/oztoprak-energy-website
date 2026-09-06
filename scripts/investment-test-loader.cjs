/* Compile isolated TS modules in memory using the project's existing compiler. */
const fs = require("node:fs");
const path = require("node:path");
const { createRequire } = require("node:module");
const ts = require("typescript");
const root = path.resolve(__dirname, "..");
const cache = new Map();

function loadTs(relative) {
  const filename = path.resolve(root, relative);
  if (cache.has(filename)) return cache.get(filename).exports;
  const compiledModule = { exports: {} };
  cache.set(filename, compiledModule);
  const localRequire = createRequire(filename);
  const source = ts.transpileModule(fs.readFileSync(filename, "utf8"), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true } }).outputText;
  const resolve = (id) => {
    if (id.startsWith("@/") || id.startsWith(".")) {
      const target = id.startsWith("@/") ? path.join(root, id.slice(2)) : path.resolve(path.dirname(filename), id);
      for (const ext of ["", ".ts", ".tsx"]) if (fs.existsSync(target + ext) && fs.statSync(target + ext).isFile()) return loadTs(target + ext);
    }
    return localRequire(id);
  };
  new Function("require", "module", "exports", source)(resolve, compiledModule, compiledModule.exports);
  return compiledModule.exports;
}
module.exports = { loadTs };
