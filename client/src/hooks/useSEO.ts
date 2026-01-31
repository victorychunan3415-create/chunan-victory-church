/**
 * SEO 優化 Hook
 * 用於在 React 組件中設置 Meta 標籤和結構化數據
 */

import { useEffect } from 'react';
import { SEOMetaTags, generateOrganizationSchema, generateChurchSchema, SITE_CONFIG } from '@shared/seo';

export function useSEO(seo: SEOMetaTags) {
  useEffect(() => {
    // 設置頁面標題
    document.title = seo.title;

    // 設置或更新 Meta 標籤
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      let tag = document.querySelector(
        isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`
      ) as HTMLMetaElement | null;

      if (!tag) {
        tag = document.createElement('meta');
        if (isProperty) {
          tag.setAttribute('property', name);
        } else {
          tag.setAttribute('name', name);
        }
        document.head.appendChild(tag);
      }

      tag.content = content;
    };

    // 基本 Meta 標籤
    updateMetaTag('description', seo.description);

    if (seo.keywords && seo.keywords.length > 0) {
      updateMetaTag('keywords', seo.keywords.join(', '));
    }

    if (seo.author) {
      updateMetaTag('author', seo.author);
    }

    // Open Graph 標籤
    updateMetaTag('og:title', seo.ogTitle || seo.title, true);
    updateMetaTag('og:description', seo.ogDescription || seo.description, true);

    if (seo.ogImage) {
      updateMetaTag('og:image', seo.ogImage, true);
    }

    if (seo.ogUrl) {
      updateMetaTag('og:url', seo.ogUrl, true);
    }

    updateMetaTag('og:type', 'website', true);

    // Twitter Card 標籤
    if (seo.twitterCard) {
      updateMetaTag('twitter:card', seo.twitterCard);
    }

    if (seo.twitterTitle) {
      updateMetaTag('twitter:title', seo.twitterTitle);
    }

    if (seo.twitterDescription) {
      updateMetaTag('twitter:description', seo.twitterDescription);
    }

    if (seo.twitterImage) {
      updateMetaTag('twitter:image', seo.twitterImage);
    }

    // Canonical 連結
    if (seo.canonical) {
      let canonicalTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!canonicalTag) {
        canonicalTag = document.createElement('link');
        canonicalTag.rel = 'canonical';
        document.head.appendChild(canonicalTag);
      }
      canonicalTag.href = seo.canonical;
    }

    // Robots 標籤
    if (seo.robots) {
      updateMetaTag('robots', seo.robots);
    }
  }, [seo]);
}

/**
 * 添加 JSON-LD 結構化數據
 */
export function useStructuredData(schema: Record<string, any>) {
  useEffect(() => {
    const scriptTag = document.createElement('script');
    scriptTag.type = 'application/ld+json';
    scriptTag.textContent = JSON.stringify(schema);
    document.head.appendChild(scriptTag);

    return () => {
      document.head.removeChild(scriptTag);
    };
  }, [schema]);
}

/**
 * 在頁面加載時添加組織和教會結構化數據
 */
export function useOrganizationSchema() {
  useStructuredData(JSON.parse(generateOrganizationSchema()));
}

export function useChurchSchema() {
  useStructuredData(JSON.parse(generateChurchSchema()));
}

/**
 * 生成頁面 URL
 */
export function getPageUrl(path: string): string {
  return `${SITE_CONFIG.url}${path}`;
}
