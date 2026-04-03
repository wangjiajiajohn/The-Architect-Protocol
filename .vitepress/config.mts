import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "The Architect's Protocol",
  description: "AI-Human Collaborative Engineering — 2026 Master Edition",
  base: '/The-Architect-Protocol/',
  
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '演进向导', link: '/guide/1-crisis' },
          { text: 'SOP 协议', link: '/SOP' },
          { text: '实战演示', link: '/USAGE_EXAMPLE' }
        ],
        sidebar: [
          {
            text: '写在前面：拥抱重塑',
            items: [
              { text: '1. AI 到底改变了什么？', link: '/guide/1-crisis' },
              { text: '2. 升维：超级个体的诞生', link: '/guide/2-breakthrough' },
              { text: '3. 协作：如何约束与驾驭', link: '/guide/3-collaboration' }
            ]
          },
          {
            text: '💡 工程标准：为什么用它？',
            items: [
              { text: '💎 核心业务价值', link: '/guide/why-protocol' }
            ]
          },
          {
            text: '🏗️ 基础设施：架构师协议',
            items: [
              { text: 'SOP 标准控制', link: '/SOP' },
              { text: '无瑕指令范式', link: '/PROMPTS' },
              { text: 'ADR 历史记录', link: '/ARCH' },
              { text: '实战工作流演示', link: '/USAGE_EXAMPLE' }
            ]
          },
          {
            text: '社区与贡献',
            items: [
              { text: '贡献指南', link: '/CONTRIBUTING' }
            ]
          }
        ]
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Guide', link: '/en/guide/1-crisis' },
          { text: 'Protocol', link: '/en/SOP' },
          { text: 'Usage', link: '/en/USAGE_EXAMPLE' }
        ],
        sidebar: [
          {
            text: 'Foreword: Embracing Change',
            items: [
              { text: '1. What AI Changed', link: '/en/guide/1-crisis' },
              { text: '2. The Super Individual', link: '/en/guide/2-breakthrough' },
              { text: '3. Constraint & Synergy', link: '/en/guide/3-collaboration' }
            ]
          },
          {
            text: '💡 Standards: Why use this?',
            items: [
              { text: '💎 Core Business Value', link: '/en/guide/why-protocol' }
            ]
          },
          {
            text: '🏗️ Core Infrastructure',
            items: [
              { text: 'SOP Protocol', link: '/en/SOP' },
              { text: 'Universal Prompts', link: '/en/PROMPTS' },
              { text: 'ADR Records', link: '/en/ARCH' },
              { text: 'Usage Example', link: '/en/USAGE_EXAMPLE' }
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
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wangjiajiajohn/The-Architect-Protocol' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 Jiajia Wang'
    }
  }
})
