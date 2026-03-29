import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { LogOut, LayoutDashboard, User, ShieldCheck, Zap } from "lucide-react";
import LogoutButton from "@/app/components/LogoutButton";

export default async function DashboardPage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  const user = await prisma.user.findUnique({
    where: { id: session.userId },
    select: { username: true },
  });

  return (
    <main style={{ padding: "2rem" }}>
      <div className="container" style={{ width: "100%", maxWidth: "1000px" }}>
        <header style={{ 
          display: "flex", justifyContent: "space-between", alignItems: "center",
          marginBottom: "3rem", background: "var(--card-bg)", padding: "1.5rem 2rem",
          borderRadius: "20px", border: "1px solid var(--card-border)",
          backdropFilter: "blur(10px)"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{ 
              background: "linear-gradient(135deg, var(--primary), var(--secondary))",
              width: "40px", height: "40px", borderRadius: "10px",
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <LayoutDashboard size={20} color="white" />
            </div>
            <h2 style={{ fontSize: "1.5rem" }}>Antigravity Dashboard</h2>
          </div>
          <LogoutButton />
        </header>

        <section style={{ 
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem"
        }}>
          <div className="auth-card" style={{ maxWidth: "none", margin: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
              <div style={{ 
                background: "rgba(99, 102, 241, 0.1)", pading: "10px", 
                borderRadius: "12px", display: "flex", alignItems: "center",
                justifyContent: "center", width: "40px", height: "40px"
              }}>
                <User size={20} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: "1.25rem" }}>Profile Information</h3>
            </div>
            <div style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
              <p style={{ marginBottom: "0.5rem" }}>Username: <span style={{ color: "white", fontWeight: 600 }}>{user?.username}</span></p>
              <p>Account Status: <span style={{ color: "var(--success)", fontWeight: 600 }}>Active</span></p>
            </div>
          </div>

          <div className="auth-card" style={{ maxWidth: "none", margin: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
              <div style={{ 
                background: "rgba(34, 197, 94, 0.1)", pading: "10px", 
                borderRadius: "12px", display: "flex", alignItems: "center",
                justifyContent: "center", width: "40px", height: "40px"
              }}>
                <ShieldCheck size={20} color="var(--success)" />
              </div>
              <h3 style={{ fontSize: "1.25rem" }}>Security Overview</h3>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
              Logged in using high-security JWT and Encrypted Hash.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
