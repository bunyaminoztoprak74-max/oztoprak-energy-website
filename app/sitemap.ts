import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { getServices } from "@/content/services";
import { getProjects } from "@/content/projects";
import { getPosts, getCategories } from "@/content/blog";
import { generateProgrammaticSeoPages, getClusters, getLocations, getPillars, getProblems } from "@/content/programmatic-seo";

const baseUrl = "https://oztoprakenerji.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about", "/services", "/projects", "/blog", "/contact", "/privacy-policy", "/terms"];

  return locales.flatMap((locale) => {
    const seoIndexPages = ["/seo", "/problems", "/locations", "/topics", "/pillars"];
    const localizedStaticPages = locale === "tr" ? [...staticPages, "/hizmetler", "/iletisim"] : staticPages;
    const pages = [...localizedStaticPages, ...seoIndexPages].map((path) => ({ url: `${baseUrl}/${locale}${path}`, lastModified: new Date() }));
    const services = getServices(locale).map((service) => ({ url: `${baseUrl}/${locale}/services/${service.slug}`, lastModified: new Date() }));
    const projects = getProjects(locale).map((project) => ({ url: `${baseUrl}/${locale}/projects/${project.slug}`, lastModified: new Date() }));
    const posts = getPosts(locale).map((post) => ({ url: `${baseUrl}/${locale}/blog/${post.slug}`, lastModified: new Date(post.date) }));
    const categories = getCategories(locale).map((category) => ({ url: `${baseUrl}/${locale}/blog/category/${category.slug}`, lastModified: new Date() }));
    const generatedSeo = generateProgrammaticSeoPages(locale).map((page) => ({ url: `${baseUrl}/${locale}/seo/${page.slug}`, lastModified: new Date() }));
    const problems = getProblems(locale).map((problem) => ({ url: `${baseUrl}/${locale}/problems/${problem.slug}`, lastModified: new Date() }));
    const locations = getLocations(locale).map((location) => ({ url: `${baseUrl}/${locale}/locations/${location.slug}`, lastModified: new Date() }));
    const clusters = getClusters(locale).map((cluster) => ({ url: `${baseUrl}/${locale}/topics/${cluster.slug}`, lastModified: new Date() }));
    const pillars = getPillars(locale).map((pillar) => ({ url: `${baseUrl}/${locale}/pillars/${pillar.slug}`, lastModified: new Date() }));

    return [...pages, ...services, ...projects, ...posts, ...categories, ...generatedSeo, ...problems, ...locations, ...clusters, ...pillars];
  });
}
