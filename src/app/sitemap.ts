import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sellworth.in";
const routes = [
  "",
  "/about",
  "/contact",
  "/commercial",
  "/developers",
  "/insights",
  "/nri-services",
  "/properties",
  "/residences",
  "/senior-living",
];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}