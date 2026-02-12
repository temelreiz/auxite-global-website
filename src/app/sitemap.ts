import { MetadataRoute } from 'next';

const baseUrl = 'https://auxiteglobal.com';

const staticPages = [
  '',
  '/about',
  '/group-structure',
  '/solutions',
  '/infrastructure',
  '/trust-governance',
  '/asset-protection',
  '/insights',
  '/insights/institutional-case-fully-allocated',
  '/insights/bankruptcy-remote-asset-design',
  '/insights/multi-jurisdiction-infrastructure',
  '/insights/structural-risk-digital-asset-platforms',
  '/contact',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'weekly' : 'monthly',
    priority: page === '' ? 1.0 : page === '/about' || page === '/solutions' ? 0.9 : 0.8,
  }));
}
