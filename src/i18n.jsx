import React, { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    navbar: {
      logo: 'Velvet Pour',
      links: {
        cocktails: 'Cocktails',
        about: 'About',
        work: 'Art',
        contact: 'Contact',
      },
    },
    hero: {
      title: 'MOJITO',
      topLine1: 'Cool. Crisp. Classic.',
      subtitleLarge: 'Sip the Spirit \nof Summer',
      viewCocktailsText:
        'Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes — designed to delight your senses.',
      viewCocktailsCta: 'View Cocktails',
    },
    about: {
      badge: 'Best Cocktails',
      title: 'Where every detail matters - from muddle to garnish',
      description:
        'Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable.',
      ratingLabel: 'More than +12000 customers',
    },
    cocktails: {
      popularTitle: 'Most Popular:',
      mocktailTitle: 'Most Loved Mocktails:',
    },
    menu: {
      sectionSrTitle: 'Cocktail Menu',
      navAriaLabel: 'Cocktail Navigation',
      recipeFor: 'Recipe for:',
    },
    art: {
      sectionTitle: 'The ART',
      goodList: [
        'Handpicked ingredients',
        'Signature techniques',
        'Bartending artistry in action',
        'Freshly muddled flavors',
      ],
      featureList: [
        'Perfectly balanced blends',
        'Garnished to perfection',
        'Ice-cold every time',
        'Expertly shaken & stirred',
      ],
      maskedTitle: 'Sip-Worthy Perfection',
      maskedHeading: 'Made with Craft, Poured with Passion',
      maskedText:
        "This isn’t just a drink. It’s a carefully crafted moment made just for you.",
    },
    contact: {
      sectionTitle: 'Where to Find Us',
      visitTitle: 'Visit our Bar',
      visitAddress: '456, Raq Blvd. #404, Los Angeles, CA 90210',
      contactTitle: 'Contact us',
      phone: '(555) 987-6543',
      email: '908680719mwcq@gmail.com',
      openTitle: 'Open every day',
      socialsTitle: 'Socials',
      openingHours: [
        { day: 'Mon–Thu', time: '11:00am – 12am' },
        { day: 'Fri', time: '11:00am – 2am' },
        { day: 'Sat', time: '9:00am – 2am' },
        { day: 'Sun', time: '9:00am – 1am' },
      ],
    },
  },
  zh: {
    navbar: {
      logo: '天鹅绒酒廊',
      links: {
        cocktails: '鸡尾酒',
        about: '关于我们',
        work: '艺术',
        contact: '联系我们',
      },
    },
    hero: {
      title: 'MOJITO',
      topLine1: '清爽 · 冰凉 · 经典',
      subtitleLarge: '一口喝下\n整个夏天',
      viewCocktailsText:
        '菜单上的每一杯鸡尾酒，都由精选基酒、新鲜原料与独特配方调和而成，只为唤醒你的全部味蕾。',
      viewCocktailsCta: '查看鸡尾酒菜单',
    },
    about: {
      badge: '匠心鸡尾酒',
      title: '每一个细节都重要 - 从捣碎到点缀',
      description:
        '我们对每一杯酒的执念，从第一下捣碎到最后一片装饰。正是这些细节，让一杯简单的酒变成难忘的体验。',
      ratingLabel: '超 12000 位顾客好评',
    },
    cocktails: {
      popularTitle: '最受欢迎：',
      mocktailTitle: '人气无酒精特调：',
    },
    menu: {
      sectionSrTitle: '鸡尾酒菜单',
      navAriaLabel: '鸡尾酒切换导航',
      recipeFor: '秘方配方：',
    },
    art: {
      sectionTitle: '调酒的艺术',
      goodList: ['严选原料', '独家工艺', '调酒师的舞台', '现捣新鲜风味'],
      featureList: ['层次平衡的风味', '精致点缀装饰', '入口冰爽适口', '每一杯都用心摇制'],
      maskedTitle: '每一口，都是高光',
      maskedHeading: '以匠心调制，让情绪慢慢晕开',
      maskedText: '这不只是一杯酒，而是为你量身打造的一段微醺时刻。',
    },
    contact: {
      sectionTitle: '如何找到我们',
      visitTitle: '欢迎来店小酌',
      visitAddress: '加州洛杉矶 Raq 大道 456 号 404 室',
      contactTitle: '联系我们',
      phone: '(555) 987-6543',
      email: '908680719mwcq@gmail.com',
      openTitle: '每日营业时间',
      socialsTitle: '社交平台',
      openingHours: [
        { day: '周一–周四', time: '11:00 – 24:00' },
        { day: '周五', time: '11:00 – 02:00' },
        { day: '周六', time: '09:00 – 02:00' },
        { day: '周日', time: '09:00 – 01:00' },
      ],
    },
  },
};

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'zh' : 'en'));
  };

  const value = {
    lang,
    toggleLanguage,
    t: (section, key) => {
      const sectionData = translations[lang][section] || {};
      const result = sectionData[key];
      return result !== undefined ? result : (translations.en[section] || {})[key] || '';
    },
    translations: translations[lang],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
};

