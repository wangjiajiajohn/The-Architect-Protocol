---
layout: doc
---

# 📝 博客

关于 AI 与人类协作工程的深度思考——从真实踩坑到系统性解决方案。

<div class="blog-list">
  <a class="blog-card" href="/The-Architect-Protocol/zh/blog/ai-6-deaths">
    <div class="blog-meta">2026-04-04 · 10 分钟阅读</div>
    <h2>AI 写代码失控的 6 种死法</h2>
    <p>雪崩式、幻觉架构师、失忆架构师、TODO 贩子、沉默共谋者、上下文污染者——这 6 种模式你中了几个？</p>
    <div class="blog-tags">
      <span>AI 工程</span>
      <span>最佳实践</span>
      <span>反模式</span>
    </div>
  </a>
</div>

<style>
.blog-list {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.blog-card {
  display: block;
  padding: 28px 32px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  text-decoration: none;
  transition: all 0.3s ease;
  background: var(--vp-c-bg-soft);
}
.blog-card:hover {
  border-color: #50e3c2;
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(80, 227, 194, 0.1);
}
.blog-meta {
  font-size: 0.8rem;
  color: var(--vp-c-text-3);
  margin-bottom: 8px;
}
.blog-card h2 {
  margin: 0 0 10px;
  font-size: 1.3rem;
  color: var(--vp-c-text-1);
  border: none;
  padding: 0;
}
.blog-card p {
  margin: 0 0 16px;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
  line-height: 1.6;
}
.blog-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.blog-tags span {
  padding: 3px 10px;
  border-radius: 20px;
  font-size: 0.75rem;
  background: rgba(80, 227, 194, 0.08);
  color: #50e3c2;
  border: 1px solid rgba(80, 227, 194, 0.2);
}
</style>
