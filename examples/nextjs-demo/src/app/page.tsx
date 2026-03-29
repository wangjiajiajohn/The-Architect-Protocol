import Link from "next/link";
import { ArrowRight, Shield, Database, Layout } from "lucide-react";

export default function Home() {
  return (
    <main style={{ padding: "0" }}>
      <section style={{ 
        height: "100vh", width: "100vw", display: "flex", 
        flexDirection: "column", alignItems: "center", justifyContent: "center",
        textAlign: "center", position: "relative", overflow: "hidden"
      }}>
        {/* Background glow effects */}
        <div style={{ 
          position: "absolute", top: "20%", left: "30%", 
          width: "400px", height: "400px", background: "var(--primary)",
          filter: "blur(120px)", opacity: "0.2", pointerEvents: "none"
        }}></div>
        <div style={{ 
          position: "absolute", bottom: "10%", right: "20%", 
          width: "300px", height: "300px", background: "var(--secondary)",
          filter: "blur(100px)", opacity: "0.1", pointerEvents: "none"
        }}></div>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ 
            display: "inline-flex", alignItems: "center", 
            background: "rgba(255, 255, 255, 0.05)", padding: "0.5rem 1.25rem",
            borderRadius: "999px", border: "1px solid var(--card-border)",
            marginBottom: "2rem", gap: "0.5rem", fontSize: "0.875rem",
            color: "var(--text-muted)"
          }}>
            <Shield size={14} color="var(--primary)" />
            <span>Secure Registration System v1.0</span>
          </div>

          <h1 style={{ 
            fontSize: "clamp(2.5rem, 8vw, 4rem)", lineHeight: "1.1", marginBottom: "1.5rem",
            background: "linear-gradient(to bottom right, #ffffff 50%, #94a3b8)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
          }}>
            中国汽车 <br/> 新势力销量大模型仪表盘
          </h1>

          <p style={{ 
            fontSize: "clamp(1rem, 4vw, 1.25rem)", color: "var(--text-muted)", 
            maxWidth: "600px", margin: "0 auto 3rem", lineHeight: "1.6"
          }}>
            实时追踪蔚来、小米、问界等新势力交付数据。
            结合大模型深度解析市场波动，洞察智能电动车未来。
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/dashboard" className="btn btn-primary" style={{ width: "auto", minWidth: "160px", padding: "1rem 1.5rem" }}>
              <span>进入仪表盘</span>
              <ArrowRight size={20} />
            </Link>
            <Link href="/register" className="btn btn-secondary" style={{ width: "auto", minWidth: "160px", padding: "1rem 1.5rem" }}>
              <span>注册 Pro 账号</span>
            </Link>
          </div>

          <div style={{ 
            marginTop: "clamp(3rem, 10vw, 6rem)", display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem",
            textAlign: "left"
          }}>
            <FeatureCard 
              icon={<Database color="var(--primary)" size={24}/>} 
              title="全量数据追踪"
              desc="覆盖保险量、交付量及订单积压等多维度关键指标。"
            />
            <FeatureCard 
              icon={<Shield color="var(--secondary)" size={24}/>} 
              title="AI 深度洞察"
              desc="大模型实时解析政策走向与市场情绪，透视销量背后的逻辑。"
            />
            <FeatureCard 
              icon={<Layout color="var(--primary)" size={24}/>} 
              title="极速端云体验"
              desc="基于 Next.js 15 构建，享受毫秒级的响应与极致的可视化效果。"
            />
          </div>
        </div>
      </section>

      <footer style={{ 
        padding: "2rem", textAlign: "center", 
        color: "var(--text-muted)", fontSize: "0.875rem",
        borderTop: "1px solid var(--card-border)"
      }}>
        <p>© 2026 Antigravity System. All rights reserved.</p>
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div style={{ 
      background: "var(--glass)", padding: "1.5rem", 
      borderRadius: "20px", border: "1px solid var(--card-border)"
    }}>
      <div style={{ marginBottom: "1rem" }}>{icon}</div>
      <h3 style={{ marginBottom: "0.5rem" }}>{title}</h3>
      <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: "1.5" }}>{desc}</p>
    </div>
  );
}
