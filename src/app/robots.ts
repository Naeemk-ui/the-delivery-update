import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/api/'], // Keeps bots out of your backend routes
    },
    sitemap: 'https://www.thedelivery.co.za/sitemap.xml',
  };
}