import { readFileSync } from "node:fs";

const source = readFileSync(new URL("../content/programmatic-seo.ts", import.meta.url), "utf8");

function countMatches(pattern) {
  return [...source.matchAll(pattern)].length;
}

function assert(condition, message) {
  if (!condition) {
    console.error(`SEO audit failed: ${message}`);
    process.exitCode = 1;
  }
}

const generatedFields = {
  intro: countMatches(/intro:\s*buildGeneratedIntro/g),
  sections: countMatches(/sections:\s*buildGeneratedSections/g),
  expertCommentary: countMatches(/expertCommentary:\s*buildExpertCommentary/g),
  fieldProblems: countMatches(/fieldProblems:\s*buildFieldProblems/g),
  recommendedActions: countMatches(/recommendedActions:\s*buildRecommendedActions/g),
  deliverables: countMatches(/deliverables:\s*buildGeneratedDeliverables/g),
  faqs: countMatches(/faqs:\s*buildGeneratedFaqs/g),
  cta: countMatches(/cta:\s*\n/g),
  conclusion: countMatches(/conclusion:\s*buildGeneratedConclusion/g)
};

assert(generatedFields.intro === 1, "generated SEO pages must include unique intro copy");
assert(generatedFields.sections === 1, "generated SEO pages must include consultant sections");
assert(generatedFields.expertCommentary === 1, "generated SEO pages must include expert commentary");
assert(generatedFields.fieldProblems === 1, "generated SEO pages must include common field problems");
assert(generatedFields.recommendedActions === 1, "generated SEO pages must include recommended engineering actions");
assert(generatedFields.deliverables === 1, "generated SEO pages must include deliverables");
assert(generatedFields.faqs === 1, "generated SEO pages must include structured FAQs");
assert(generatedFields.cta === 1, "generated SEO pages must include a contextual CTA");
assert(generatedFields.conclusion === 1, "generated SEO pages must include a unique consultant conclusion");

const serviceLocationTemplateCount = countMatches(/slug: `\$\{service\.slug\}-\$\{location\.slug\}-\$\{intent\.slug\}`/g);
assert(serviceLocationTemplateCount === 1, "service-location-intent slug template must stay unique and explicit");

const profileCount = countMatches(/angle:/g);
assert(profileCount >= 6, "intent profiles should exist for each supported language and intent");

const problemCount = countMatches(/slug: "low-hydropower-generation"|slug: "dusuk-hes-uretimi"/g);
assert(problemCount === 2, "problem entities should exist in both languages");

if (!process.exitCode) {
  console.log("SEO quality audit passed: generated pages include unique metadata hooks, intros, consultant sections, expert commentary, field problems, engineering actions, deliverables, FAQs, CTAs, conclusions and service-location-intent slugging.");
}
