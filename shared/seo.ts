/**
 * SEO 配置和工具函數
 */

export interface SEOMetaTags {
  title: string;
  description: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonical?: string;
  robots?: string;
  author?: string;
}

export interface SitemapEntry {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

// 網站基本配置
export const SITE_CONFIG = {
  name: '竹南勝利堂',
  url: typeof window !== 'undefined' 
    ? (import.meta.env.VITE_APP_URL || 'https://chunan-victory-church.pages.dev')
    : (process.env.VITE_APP_URL || 'https://chunan-victory-church.pages.dev'),
  description: '竹南勝利堂是一個充滿溫暖與生命力的教會社群。我們相信每個人都能在這裡找到屬靈的家，經歷神的愛與恩典，與弟兄姊妹一同成長。',
  logo: typeof window !== 'undefined'
    ? (import.meta.env.VITE_APP_LOGO || '/logo.png')
    : (process.env.VITE_APP_LOGO || '/logo.png'),
  author: '竹南勝利堂',
  email: 'contact@victory-church.com',
  phone: '+886-XXXX-XXXX',
  address: '苗栗縣竹南鎮',
  socialMedia: {
    facebook: 'https://facebook.com/victory-church',
    youtube: 'https://youtube.com/@victory-church',
  },
};

// 頁面 SEO 配置
export const PAGE_SEO_CONFIG: Record<string, SEOMetaTags> = {
  home: {
    title: '竹南勝利堂 - 回家吧！這裡有神的話與愛',
    description: '竹南勝利堂官方網站。我們是一個充滿溫暖與生命力的教會社群，提供主日崇拜、小組生活、靈性成長等服務。',
    keywords: ['教會', '竹南', '基督教', '信仰', '靈性成長'],
    ogTitle: '竹南勝利堂',
    ogDescription: '回家吧！這裡有神的話與愛',
    ogImage: '/og-image.jpg',
    twitterCard: 'summary_large_image',
  },
  news: {
    title: '最新消息 - 竹南勝利堂',
    description: '查看竹南勝利堂的最新消息、活動公告和靈性資源。',
    keywords: ['最新消息', '活動', '公告', '教會新聞'],
    ogTitle: '最新消息 - 竹南勝利堂',
    ogDescription: '查看竹南勝利堂的最新消息和活動公告',
  },
  groups: {
    title: '小組生活 - 竹南勝利堂',
    description: '加入竹南勝利堂的小組，與弟兄姊妹一同靈性成長。我們提供多個小組，滿足不同年齡和背景的需求。',
    keywords: ['小組', '團契', '靈性成長', '團體活動'],
    ogTitle: '小組生活 - 竹南勝利堂',
    ogDescription: '加入我們的小組，與弟兄姊妹一同成長',
  },
  newHere: {
    title: '新朋友專區 - 竹南勝利堂',
    description: '歡迎新朋友！了解竹南勝利堂的聚會流程、交通資訊和線上奉獻方式。',
    keywords: ['新朋友', '歡迎', '聚會時間', '交通資訊'],
    ogTitle: '新朋友專區 - 竹南勝利堂',
    ogDescription: '歡迎來到竹南勝利堂！了解我們的聚會和服務',
  },
  about: {
    title: '關於我們 - 竹南勝利堂',
    description: '了解竹南勝利堂的使命、異象和歷史。',
    keywords: ['關於', '使命', '異象', '教會歷史'],
    ogTitle: '關於我們 - 竹南勝利堂',
    ogDescription: '了解竹南勝利堂的使命和異象',
  },
  contact: {
    title: '聯絡我們 - 竹南勝利堂',
    description: '聯絡竹南勝利堂。我們很樂意聽到您的意見和建議。',
    keywords: ['聯絡', '聯繫', '反饋', '問詢'],
    ogTitle: '聯絡我們 - 竹南勝利堂',
    ogDescription: '聯絡竹南勝利堂，我們很樂意為您服務',
  },
};

/**
 * 生成 Meta 標籤 HTML
 */
export function generateMetaTags(seo: SEOMetaTags): string {
  const tags: string[] = [];

  // 基本 Meta 標籤
  tags.push(`<title>${escapeHtml(seo.title)}</title>`);
  tags.push(`<meta name="description" content="${escapeHtml(seo.description)}">`);

  if (seo.keywords && seo.keywords.length > 0) {
    tags.push(`<meta name="keywords" content="${escapeHtml(seo.keywords.join(', '))}">`);
  }

  if (seo.author) {
    tags.push(`<meta name="author" content="${escapeHtml(seo.author)}">`);
  }

  // Open Graph 標籤
  tags.push(`<meta property="og:title" content="${escapeHtml(seo.ogTitle || seo.title)}">`);
  tags.push(`<meta property="og:description" content="${escapeHtml(seo.ogDescription || seo.description)}">`);

  if (seo.ogImage) {
    tags.push(`<meta property="og:image" content="${escapeHtml(seo.ogImage)}">`);
  }

  if (seo.ogUrl) {
    tags.push(`<meta property="og:url" content="${escapeHtml(seo.ogUrl)}">`);
  }

  tags.push(`<meta property="og:type" content="website">`);

  // Twitter Card 標籤
  if (seo.twitterCard) {
    tags.push(`<meta name="twitter:card" content="${escapeHtml(seo.twitterCard)}">`);
  }

  if (seo.twitterTitle) {
    tags.push(`<meta name="twitter:title" content="${escapeHtml(seo.twitterTitle)}">`);
  }

  if (seo.twitterDescription) {
    tags.push(`<meta name="twitter:description" content="${escapeHtml(seo.twitterDescription)}">`);
  }

  if (seo.twitterImage) {
    tags.push(`<meta name="twitter:image" content="${escapeHtml(seo.twitterImage)}">`);
  }

  // Canonical 連結
  if (seo.canonical) {
    tags.push(`<link rel="canonical" href="${escapeHtml(seo.canonical)}">`);
  }

  // Robots 標籤
  if (seo.robots) {
    tags.push(`<meta name="robots" content="${escapeHtml(seo.robots)}">`);
  }

  return tags.join('\n  ');
}

/**
 * 生成 Sitemap XML
 */
export function generateSitemapXml(entries: SitemapEntry[]): string {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (entry) => `  <url>
    <loc>${escapeXml(entry.url)}</loc>
${entry.lastmod ? `    <lastmod>${escapeXml(entry.lastmod)}</lastmod>` : ''}
${entry.changefreq ? `    <changefreq>${escapeXml(entry.changefreq)}</changefreq>` : ''}
${entry.priority !== undefined ? `    <priority>${entry.priority}</priority>` : ''}
  </url>`
  )
  .join('\n')}
</urlset>`;

  return xml;
}

/**
 * 生成 robots.txt
 */
export function generateRobotsTxt(sitemapUrl: string): string {
  return `# Robots.txt for ${SITE_CONFIG.name}
# Generated automatically

User-agent: *
Allow: /
Disallow: /admin
Disallow: /api
Disallow: /.env
Disallow: /node_modules

# Crawl delay (in seconds)
Crawl-delay: 1

# Sitemap
Sitemap: ${sitemapUrl}

# Google-specific rules
User-agent: Googlebot
Allow: /

# Bing-specific rules
User-agent: Bingbot
Allow: /
`;
}

/**
 * 生成 JSON-LD 結構化數據
 */
export function generateOrganizationSchema(): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: SITE_CONFIG.logo,
    description: SITE_CONFIG.description,
    email: SITE_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE_CONFIG.address,
      addressCountry: 'TW',
    },
    sameAs: [SITE_CONFIG.socialMedia.facebook, SITE_CONFIG.socialMedia.youtube],
  });
}

/**
 * 生成 Church 結構化數據
 */
export function generateChurchSchema(): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE_CONFIG.address,
      addressCountry: 'TW',
    },
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
  });
}

/**
 * 轉義 HTML 特殊字符
 */
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

/**
 * 轉義 XML 特殊字符
 */
function escapeXml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}
