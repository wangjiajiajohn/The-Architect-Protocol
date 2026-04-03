import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "The Architect's Protocol",
  description: "A battle-tested SOP for Human-AI collaborative software engineering. Works with Cursor, Claude, ChatGPT, and GitHub Copilot.",
  base: '/The-Architect-Protocol/',

  vite: {
    assetsInclude: ['**/*.gif'],
  },

  head: [
    ['meta', { name: 'keywords', content: 'AI engineering, SOP, Cursor, Claude, ChatGPT, Copilot, atomic commits, software architecture, AI collaboration' }],
    ['meta', { property: 'og:title', content: "The Architect's Protocol" }],
    ['meta', { property: 'og:description', content: 'Transform AI from an impulsive code generator into a precision engineering officer.' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ],

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Quick Start', link: '/guide/quick-start' },
          { text: 'Protocol', link: '/SOP' },
          { text: 'Real-World Cases', link: '/guide/4-real-world-cases' },
          { text: 'AI Tool Setup', link: '/guide/6-ai-tool-setup' },
          { text: '📝 Blog', link: '/blog/' },
        ],
        sidebar: [
          {
            text: '📖 Why This Exists',
            items: [
              { text: '1. What AI Changed', link: '/guide/1-crisis' },
              { text: '2. The Super Individual', link: '/guide/2-breakthrough' },
              { text: '3. Constraint & Synergy', link: '/guide/3-collaboration' },
              { text: '💎 Core Value', link: '/guide/why-protocol' },
            ]
          },
          {
            text: '🚀 Get Started',
            items: [
              { text: '3-Step Quick Start', link: '/guide/quick-start' },
              { text: '🤖 AI Tool Setup', link: '/guide/6-ai-tool-setup' },
            ]
          },
          {
            text: '📐 The Protocol',
            items: [
              { text: 'SOP (Full Pipeline)', link: '/SOP' },
              { text: 'Universal Prompts', link: '/PROMPTS' },
              { text: 'ADR Records', link: '/ARCH' },
            ]
          },
          {
            text: '🎯 Learn by Example',
            items: [
              { text: 'Real-World Cases', link: '/guide/4-real-world-cases' },
              { text: '🚫 Anti-Patterns', link: '/guide/5-anti-patterns' },
            ]
          },
          {
            text: '📁 Templates',
            items: [
              { text: 'Research Summary', link: '/templates/research_summary_template' },
              { text: 'Implementation Plan', link: '/templates/implementation_plan_template' },
              { text: 'ADR Template', link: '/templates/adr_template' },
            ]
          },
          {
            text: '🤝 Community',
            items: [
              { text: 'Contributing', link: '/CONTRIBUTING' },
            ]
          },
          {
            text: '📝 Blog',
            items: [
              { text: '6 Ways AI Coding Goes Out of Control', link: '/blog/ai-6-deaths' },
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
          { text: '快速上手', link: '/zh/guide/quick-start' },
          { text: 'SOP 协议', link: '/zh/SOP' },
          { text: '实战案例', link: '/zh/guide/4-real-world-cases' },
          { text: 'AI 工具配置', link: '/zh/guide/6-ai-tool-setup' },
          { text: '📝 博客', link: '/zh/blog/' },
        ],
        sidebar: [
          {
            text: '📖 为什么需要它',
            items: [
              { text: '1. AI 到底改变了什么？', link: '/zh/guide/1-crisis' },
              { text: '2. 升维：超级个体的诞生', link: '/zh/guide/2-breakthrough' },
              { text: '3. 协作：如何约束与驾驭', link: '/zh/guide/3-collaboration' },
              { text: '💎 核心业务价值', link: '/zh/guide/why-protocol' },
            ]
          },
          {
            text: '🚀 快速上手',
            items: [
              { text: '3 步开启', link: '/zh/guide/quick-start' },
              { text: '🤖 AI 工具配置', link: '/zh/guide/6-ai-tool-setup' },
            ]
          },
          {
            text: '📐 协议文档',
            items: [
              { text: 'SOP 标准流程', link: '/zh/SOP' },
              { text: '无瑕指令范式', link: '/zh/PROMPTS' },
              { text: 'ADR 历史记录', link: '/zh/ARCH' },
            ]
          },
          {
            text: '🎯 案例学习',
            items: [
              { text: '真实案例', link: '/zh/guide/4-real-world-cases' },
              { text: '🚫 反模式图鉴', link: '/zh/guide/5-anti-patterns' },
            ]
          },
          {
            text: '📁 标准模板',
            items: [
              { text: '研究摘要模板', link: '/templates/research_summary_template' },
              { text: '实施计划模板', link: '/templates/implementation_plan_template' },
              { text: 'ADR 模板', link: '/templates/adr_template' },
            ]
          },
          {
            text: '🤝 社区与贡献',
            items: [
              { text: '贡献指南', link: '/zh/CONTRIBUTING' },
            ]
          },
          {
            text: '📝 博客',
            items: [
              { text: 'AI 写代码失控的 6 种死法', link: '/zh/blog/ai-6-deaths' },
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
    },
    search: {
      provider: 'local'
    },
    editLink: {
      pattern: 'https://github.com/wangjiajiajohn/The-Architect-Protocol/edit/main/:path',
      text: 'Edit this page on GitHub'
    }
  }
})
