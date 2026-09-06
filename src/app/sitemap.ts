import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://seanaramrez.dev",
      lastModified: new Date(),
    },
    {
      url: "https://seanaramirez.dev/professional-experience",
      lastModified: new Date(),
    },
    {
      url: "https://seanaramirez.dev/professional-experience/relevant-local-media",
      lastModified: new Date(),
    },
    {
      url: "https://seanaramirez.dev/professional-experience/sentari-ai",
      lastModified: new Date(),
    },
    {
      url: "https://seanaramirez.dev/personal-projects",
      lastModified: new Date(),
    },
  ]
}