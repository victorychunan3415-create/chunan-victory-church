/**
 * SEO 相關的 Express 路由
 */

import { Express } from 'express';
import { generateSitemap } from '../sitemap';
import { generateRobotsTxt, SITE_CONFIG } from '../../shared/seo';

export function registerSeoRoutes(app: Express) {
  // Sitemap 路由
  app.get('/sitemap.xml', (req, res) => {
    try {
      const sitemap = generateSitemap();
      res.type('application/xml').send(sitemap);
    } catch (error) {
      console.error('Sitemap generation error:', error);
      res.status(500).send('Error generating sitemap');
    }
  });

  // robots.txt 路由
  app.get('/robots.txt', (req, res) => {
    try {
      const sitemapUrl = `${SITE_CONFIG.url}/sitemap.xml`;
      const robotsTxt = generateRobotsTxt(sitemapUrl);
      res.type('text/plain').send(robotsTxt);
    } catch (error) {
      console.error('robots.txt generation error:', error);
      res.status(500).send('Error generating robots.txt');
    }
  });

  // .well-known/security.txt (可選)
  app.get('/.well-known/security.txt', (req, res) => {
    const securityTxt = `Contact: ${SITE_CONFIG.email}
Expires: ${new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()}
Preferred-Languages: zh-TW, en
`;
    res.type('text/plain').send(securityTxt);
  });
}
