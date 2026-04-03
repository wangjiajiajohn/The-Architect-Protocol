import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "The Architect's Protocol",
  description: "AI-Human Collaborative Engineering — 2026 Master Edition",
  base: '/The-Architect-Protocol/',
  
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/1-crisis' },
          { text: 'Protocol', link: '/SOP' },
          { text: 'Usage', link: '/USAGE_EXAMPLE' }
        ],
        sidebar: [
          {
            text: 'Foreword: Embracing Change',
            items: [
              { text: '1. What AI Changed', link: '/guide/1-crisis' },
              { text: '2. The Super Individual', link: '/guide/2-breakthrough' },
              { text: '3. Constraint & Synergy', link: '/guide/3-collaboration' }
            ]
          },
          {
            text: '💡 Standards: Why use this?',
            items: [
              { text: '💎 Core Business Value', link: '/guide/why-protocol' },
              { text: '🚀 Quick Start: 3 Steps', link: '/guide/quick-start' }
            ]
          },
          {
            text: '🏗️ Core Infrastructure',
            items: [
              { text: 'SOP Protocol', link: '/SOP' },
              { text: 'Universal Prompts', link: '/PROMPTS' },
              { text: 'ADR Records', link: '/ARCH' },
              { text: 'Usage Example', link: '/USAGE_EXAMPLE' }
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
          { text: '演进向导', link: '/zh/guide/1-crisis' },
          { text: 'SOP 协议', link: '/zh/SOP' },
          { text: '实战演示', link: '/zh/USAGE_EXAMPLE' }
        ],
        sidebar: [
          {
            text: '写在前面：拥抱重塑',
            items: [
              { text: '1. AI 到底改变了什么？', link: '/zh/guide/1-crisis' },
              { text: '2. 升维：超级个体的诞生', link: '/zh/guide/2-breakthrough' },
              { text: '3. 协作：如何约束与驾驭', link: '/zh/guide/3-collaboration' }
            ]
          },
          {
            text: '💡 工程标准：为什么用它？',
            items: [
              { text: '💎 核心业务价值', link: '/zh/guide/why-protocol' },
              { text: '🚀 快速上手：3 步开启', link: '/zh/guide/quick-start' }
            ]
          },
          {
            text: '🏗️ 基础设施：架构师协议',
            items: [
              { text: 'SOP 标准控制', link: '/zh/SOP' },
              { text: '无瑕指令范式', link: '/zh/PROMPTS' },
              { text: 'ADR 历史记录', link: '/zh/ARCH' },
              { text: '实战工作流演示', link: '/zh/USAGE_EXAMPLE' }
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
