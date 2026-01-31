/**
 * Sitemap 生成函數
 */

import { generateSitemapXml, SITE_CONFIG, SitemapEntry } from '../shared/seo';

/**
 * 生成網站 Sitemap
 */
export function generateSitemap(): string {
  const baseUrl = SITE_CONFIG.url;
  const today = new Date().toISOString().split('T')[0];

  const entries: SitemapEntry[] = [
    {
      url: baseUrl,
      lastmod: today,
      changefreq: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/news`,
      lastmod: today,
      changefreq: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/groups`,
      lastmod: today,
      changefreq: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/new-here`,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.7,
    },
  ];

  return generateSitemapXml(entries);
}
