import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/checkout/', '/success/'],
    },
    sitemap: 'https://hellyeahbrother.com/sitemap.xml',
  };
}
