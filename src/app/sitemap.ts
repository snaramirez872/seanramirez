import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://seanaramrez.dev",
      lastModified: new Date(),
    },
    {
      url: "https://seanaramirez.dev/projects",
      lastModified: new Date(),
    },
    {
      url: "https://seanaramirez.dev/projects/relevant-local-media",
      lastModified: new Date(),
    },
    {
      url: "https://seanaramirez.dev/projects/sentari-ai",
      lastModified: new Date(),
    },
  ]
}