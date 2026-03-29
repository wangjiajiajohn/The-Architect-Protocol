import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "The Architect's Protocol",
  description: "AI-Human Collaborative Engineering — 2026 Master Edition",
  base: '/The-Architect-Protocol/',
  
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      // Root is English
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Protocol', link: '/SOP' },
          { text: 'Usage', link: '/USAGE_EXAMPLE' }
        ],
        sidebar: [
          {
            text: 'Core System',
            items: [
              { text: 'SOP Protocol', link: '/SOP' },
              { text: 'Usage Example', link: '/USAGE_EXAMPLE' },
              { text: 'Universal Prompts', link: '/PROMPTS' }
            ]
          },
          {
            text: 'Community',
            items: [
              { text: 'Contributing', link: '/CONTRIBUTING' }
            ]
          }
        ]
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: 'SOP 协议', link: '/zh/SOP' },
          { text: '实战演示', link: '/zh/USAGE_EXAMPLE' }
        ],
        sidebar: [
          {
            text: '核心体系',
            items: [
              { text: 'SOP 核心协议', link: '/zh/SOP' },
              { text: '实战演示', link: '/zh/USAGE_EXAMPLE' },
              { text: '全平台提示词', link: '/zh/PROMPTS' }
            ]
          },
          {
            text: '社区与贡献',
            items: [
              { text: '贡献指南', link: '/zh/CONTRIBUTING' }
            ]
          }
        ]
      }
    }
  },

  themeConfig: {
    logo: '/hero-banner.png',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wangjiajiajohn/The-Architect-Protocol' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 Jiajia Wang'
    }
  }
})
