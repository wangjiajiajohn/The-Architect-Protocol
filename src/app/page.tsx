import Link from "next/link";
import { ArrowRight, Shield, Database, Layout, Github } from "lucide-react";

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
            fontSize: "4.5rem", lineHeight: "1.1", marginBottom: "1.5rem",
            background: "linear-gradient(to bottom right, #ffffff 50%, #94a3b8)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
          }}>
            Secure, Modern, and <br/> Professional Auth
          </h1>

          <p style={{ 
            fontSize: "1.25rem", color: "var(--text-muted)", 
            maxWidth: "600px", margin: "0 auto 3rem", lineHeight: "1.6"
          }}>
            A production-ready authentication system built with Next.js, 
            Prisma, and SQLite. Experience the future of user management.
          </p>

          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center" }}>
            <Link href="/register" className="btn btn-primary" style={{ width: "auto", padding: "1rem 2rem" }}>
              <span>Get Started</span>
              <ArrowRight size={20} />
            </Link>
            <Link href="/login" className="btn btn-secondary" style={{ width: "auto", padding: "1rem 2rem" }}>
              <span>Sign In</span>
            </Link>
          </div>

          <div style={{ 
            marginTop: "6rem", display: "grid", 
            gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem",
            textAlign: "left"
          }}>
            <FeatureCard 
              icon={<Database color="var(--primary)" size={24}/>} 
              title="SQLite & Prisma"
              desc="Reliable and scalable data management with zero-config."
            />
            <FeatureCard 
              icon={<Shield color="var(--secondary)" size={24}/>} 
              title="BCrypt Security"
              desc="Industry-standard password hashing and safe session management."
            />
            <FeatureCard 
              icon={<Layout color="var(--primary)" size={24}/>} 
              title="Next.js App Router"
              desc="The latest full-stack framework for maximum performance."
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
