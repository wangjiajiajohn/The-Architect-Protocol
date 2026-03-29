import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "The Architect's Protocol",
  description: "AI-Human Collaborative Engineering — 2026 Master Edition",
  base: '/The-Architect-Protocol/',
  
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN'
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Protocol', link: '/en/SOP' },
          { text: 'Usage', link: '/en/USAGE_EXAMPLE' }
        ],
        sidebar: [
          {
            text: 'Core System',
            items: [
              { text: 'SOP Protocol', link: '/en/SOP' },
              { text: 'Usage Example', link: '/en/USAGE_EXAMPLE' },
              { text: 'Universal Prompts', link: '/en/PROMPTS' }
            ]
          },
          {
            text: 'Community',
            items: [
              { text: 'Contributing', link: '/en/CONTRIBUTING' }
            ]
          }
        ]
      }
    }
  },

  themeConfig: {
    logo: '/hero-banner.png',
    nav: [
      { text: '首页', link: '/' },
      { text: 'SOP 协议', link: '/SOP' },
      { text: '实战演示', link: '/USAGE_EXAMPLE' }
    ],
    sidebar: [
      {
        text: '核心体系',
        items: [
          { text: 'SOP 核心协议', link: '/SOP' },
          { text: '实战演示', link: '/USAGE_EXAMPLE' },
          { text: '全平台提示词', link: '/PROMPTS' }
        ]
      },
      {
        text: '社区与贡献',
        items: [
          { text: '贡献指南', link: '/CONTRIBUTING' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wangjiajiajohn/The-Architect-Protocol' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 Jiajia Wang'
    }
  }
})
