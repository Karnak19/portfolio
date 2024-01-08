import { MetadataRoute } from 'next'

const BASE_URL = 'https://basile.vernouillet.dev'
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      priority: 1,
      changeFrequency: 'monthly',
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: 'monthly',
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: 'monthly',
    },
  ]
}
