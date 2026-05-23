import type { MetadataRoute } from "next";
import { getServices } from "@/content/services";
import { getProjects } from "@/content/projects";
import { getPosts, getCategories } from "@/content/blog";
import { generateProgrammaticSeoPages, getClusters, getLocations, getPillars, getProblems } from "@/content/programmatic-seo";

const baseUrl = "https://www.oztoprakenerji.com";
const now = new Date();
const prioritySeoLocations = new Set(["turkey", "turkiye", "ankara", "istanbul"]);
const prioritySeoIntents = new Set(["consultancy", "danismanlik", "technical-audit", "teknik-denetim", "owner-engineering", "isveren-muhendisligi"]);
const prioritySeoServices = new Set([
  "hydropower-consulting",
  "hydropower-plant-optimization",
  "solar-energy-consulting",
  "solar-power-plant-consultancy",
  "epc-technical-advisory",
  "epc-technical-consultancy",
  "owners-engineering",
  "power-plant-commissioning",
  "energy-audit",
  "technical-audits-existing-power-plants",
  "hes-danismanligi",
  "hes-optimizasyonu",
  "gunes-enerjisi-danismanligi",
  "ges-danismanligi",
  "epc-teknik-danismanlik-hizmeti",
  "epc-teknik-danismanlik",
  "isveren-muhendisligi",
  "enerji-santrali-devreye-alma",
  "enerji-denetimi",
  "mevcut-santraller-icin-teknik-denetim"
]);

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

function sitemapEntry(
  path: string,
  priority: number,
  changeFrequency: ChangeFrequency,
  alternates?: { en: string; tr: string }
): MetadataRoute.Sitemap[number] {
  return {
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
    alternates: alternates
      ? {
          languages: {
            en: `${baseUrl}${alternates.en}`,
            tr: `${baseUrl}${alternates.tr}`,
            "x-default": `${baseUrl}/en`
          }
        }
      : undefined
  };
}

function pairedEntries(enPath: string, trPath: string, priority: number, changeFrequency: ChangeFrequency) {
  const alternates = { en: enPath, tr: trPath };
  return [
    sitemapEntry(enPath, priority, changeFrequency, alternates),
    sitemapEntry(trPath, priority, changeFrequency, alternates)
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPairs = [
    ["", "", 1, "weekly"],
    ["/about", "/about", 0.8, "monthly"],
    ["/services", "/hizmetler", 0.95, "weekly"],
    ["/projects", "/projects", 0.85, "monthly"],
    ["/blog", "/blog", 0.85, "weekly"],
    ["/contact", "/iletisim", 0.9, "monthly"],
    ["/privacy-policy", "/privacy-policy", 0.35, "yearly"],
    ["/terms", "/terms", 0.35, "yearly"],
    ["/seo", "/seo", 0.75, "weekly"],
    ["/problems", "/problems", 0.75, "weekly"],
    ["/locations", "/locations", 0.75, "weekly"],
    ["/topics", "/topics", 0.75, "weekly"],
    ["/pillars", "/pillars", 0.75, "weekly"]
  ] as const;

  const staticPages = staticPairs.flatMap(([enPath, trPath, priority, changeFrequency]) =>
    pairedEntries(`/en${enPath}`, `/tr${trPath}`, priority, changeFrequency)
  );

  const enServices = getServices("en");
  const trServices = getServices("tr");
  const services = enServices.flatMap((service, index) => {
    const translated = trServices[index];
    return pairedEntries(`/en/services/${service.slug}`, `/tr/services/${translated.slug}`, 0.9, "monthly");
  });

  const enProjects = getProjects("en");
  const trProjects = getProjects("tr");
  const projects = enProjects.flatMap((project, index) => {
    const translated = trProjects[index];
    return pairedEntries(`/en/projects/${project.slug}`, `/tr/projects/${translated.slug}`, 0.75, "monthly");
  });

  const enPosts = getPosts("en");
  const trPosts = getPosts("tr");
  const posts = enPosts.flatMap((post, index) => {
    const translated = trPosts[index];
    const alternates = { en: `/en/blog/${post.slug}`, tr: `/tr/blog/${translated.slug}` };
    return [
      { ...sitemapEntry(alternates.en, 0.72, "monthly", alternates), lastModified: new Date(post.date) },
      { ...sitemapEntry(alternates.tr, 0.72, "monthly", alternates), lastModified: new Date(translated.date) }
    ];
  });

  const enCategories = getCategories("en");
  const trCategories = getCategories("tr");
  const categories = enCategories.flatMap((category, index) => {
    const translated = trCategories[index];
    return pairedEntries(`/en/blog/category/${category.slug}`, `/tr/blog/category/${translated.slug}`, 0.62, "monthly");
  });

  const enGeneratedSeo = generateProgrammaticSeoPages("en");
  const trGeneratedSeo = generateProgrammaticSeoPages("tr");
  const generatedSeo = enGeneratedSeo.flatMap((page, index) => {
    const translated = trGeneratedSeo[index];
    if (
      !prioritySeoServices.has(page.serviceSlug) ||
      !prioritySeoServices.has(translated.serviceSlug) ||
      !prioritySeoLocations.has(page.locationSlug) ||
      !prioritySeoLocations.has(translated.locationSlug) ||
      !prioritySeoIntents.has(page.intent) ||
      !prioritySeoIntents.has(translated.intent)
    ) {
      return [];
    }
    return pairedEntries(`/en/seo/${page.slug}`, `/tr/seo/${translated.slug}`, 0.58, "monthly");
  });

  const enProblems = getProblems("en");
  const trProblems = getProblems("tr");
  const problems = enProblems.flatMap((problem, index) => {
    const translated = trProblems[index];
    return pairedEntries(`/en/problems/${problem.slug}`, `/tr/problems/${translated.slug}`, 0.68, "monthly");
  });

  const enLocations = getLocations("en");
  const trLocations = getLocations("tr");
  const locations = enLocations.flatMap((location, index) => {
    const translated = trLocations[index];
    return pairedEntries(`/en/locations/${location.slug}`, `/tr/locations/${translated.slug}`, 0.66, "monthly");
  });

  const enClusters = getClusters("en");
  const trClusters = getClusters("tr");
  const clusters = enClusters.flatMap((cluster, index) => {
    const translated = trClusters[index];
    return pairedEntries(`/en/topics/${cluster.slug}`, `/tr/topics/${translated.slug}`, 0.7, "monthly");
  });

  const enPillars = getPillars("en");
  const trPillars = getPillars("tr");
  const pillars = enPillars.flatMap((pillar, index) => {
    const translated = trPillars[index];
    return pairedEntries(`/en/pillars/${pillar.slug}`, `/tr/pillars/${translated.slug}`, 0.74, "monthly");
  });

  return [...staticPages, ...services, ...projects, ...posts, ...categories, ...generatedSeo, ...problems, ...locations, ...clusters, ...pillars];
}
