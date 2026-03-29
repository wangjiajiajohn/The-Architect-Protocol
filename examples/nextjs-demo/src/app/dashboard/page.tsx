import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { 
  TrendingUp, 
  ChevronRight, 
  MessageSquareText, 
  Calendar
} from "lucide-react";
import LogoutButton from "@/app/components/LogoutButton";
import DataSyncManager from "@/app/components/DataSyncManager";
import SalesChart from "@/app/components/SalesChart";

export default async function DashboardPage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  // Fetch Data
  const brands = await prisma.brand.findMany({
    include: { sales: { orderBy: { date: "desc" }, take: 4 } }
  });

  const allSales = await prisma.salesData.findMany({
    where: { period: "monthly" },
    orderBy: { date: "asc" },
    include: { brand: true },
  });


  return (
    <main style={{ padding: "clamp(1rem, 5vw, 2rem)", minHeight: "100vh" }}>
      <div className="container" style={{ width: "100%", maxWidth: "1200px" }}>
        <header style={{ 
          display: "flex", justifyContent: "space-between", alignItems: "flex-start",
          flexWrap: "wrap", gap: "1rem",
          marginBottom: "clamp(1.5rem, 8vw, 3rem)", background: "var(--card-bg)", padding: "1.25rem 1.5rem",
          borderRadius: "20px", border: "1px solid var(--card-border)",
          backdropFilter: "blur(10px)"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{ 
              background: "linear-gradient(135deg, var(--primary), var(--secondary))",
              width: "40px", height: "40px", borderRadius: "10px",
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <TrendingUp size={20} color="white" />
            </div>
            <div>
              <h2 style={{ fontSize: "clamp(1.1rem, 4vw, 1.5rem)", lineHeight: 1.2 }}>NEV Insight Center</h2>
              <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                <span>最后同步: {new Date().toLocaleDateString()}</span>
                <span style={{ opacity: 0.5 }}>•</span>
                <span>官方月报/MTD 实时模式</span>
              </p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", justifyContent: "flex-end" }}>
            <DataSyncManager />
            <div style={{ width: "1px", height: "24px", background: "var(--card-border)", margin: "0 0.5rem" }} />
            <LogoutButton />
          </div>
        </header>

        {/* Global Trend Chart */}
        <div className="auth-card" style={{ maxWidth: "none", margin: "0 0 2rem", padding: "1.5rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
            <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <TrendingUp size={18} color="var(--primary)" />
              <span suppressHydrationWarning>月度交付趋势图 (Monthly)</span>
            </h3>
            <div style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
              覆盖蔚来、小米、问界
            </div>
          </div>
          <SalesChart data={allSales} brands={brands} />
        </div>

        <div style={{ 
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "1.5rem"
        }}>
          {/* Brand Detailed Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {brands.map((brand: any) => (
              <div key={brand.id} className="auth-card" style={{ maxWidth: "none", margin: 0, padding: "1.25rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{ width: "4px", height: "16px", background: brand.color, borderRadius: "2px" }} />
                    <h4 style={{ fontWeight: 600 }}>{brand.name}</h4>
                  </div>
                  <div style={{ color: "var(--primary)", fontSize: "0.75rem", fontWeight: 600 }}>PRO</div>
                </div>
                <div style={{ marginTop: "1rem", display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
                  <span style={{ fontSize: "1.75rem", fontWeight: 700 }}>~{brand.sales[0]?.amount}</span>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>辆 / 近月累计量</span>
                </div>
              </div>
            ))}
          </div>

          {/* AI Analytical Insights */}
          <div className="auth-card" style={{ maxWidth: "none", margin: 0, padding: "1.5rem" }}>
            <h3 style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
              <MessageSquareText size={18} color="var(--secondary)" />
              <span>AI 大模型深度洞察 (2026 Q1)</span>
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ 
                background: "rgba(255, 255, 255, 0.02)", padding: "1.25rem", 
                borderRadius: "16px", border: "1px solid var(--card-border)"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem", color: "var(--primary)", fontSize: "0.75rem" }}>
                  <Calendar size={14} />
                  <span>2026年3月初</span>
                </div>
                <h4 style={{ fontSize: "1rem", marginBottom: "0.75rem", color: "white" }}>小米汽车与问界挺进 4 万量级俱乐部</h4>
                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                  1月数据显示小米汽车(YU7)与问界(M系列)交付双双跨越 4w 门槛。问界以 40,016 辆稳坐榜首，展现了鸿蒙智行极强的品牌溢价与渠道转化率。
                </p>
              </div>

              <div style={{ 
                background: "rgba(255, 255, 255, 0.02)", padding: "1.25rem", 
                borderRadius: "16px", border: "1px solid var(--card-border)"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem", color: "var(--secondary)", fontSize: "0.75rem" }}>
                  <TrendingUp size={14} />
                  <span>策略分析</span>
                </div>
                <h4 style={{ fontSize: "1rem", marginBottom: "0.75rem", color: "white" }}>蔚来 2月 逆势坚挺解析</h4>
                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                  受春节淡季影响市场普遍下滑 40%-50%，但蔚来凭借新款 ES8 的高粘性用户支撑，2月保持在 20,797 辆，展现其在高价位纯电市场的稳健防御力。
                </p>
              </div>
            </div>
            <button className="btn btn-secondary" style={{ marginTop: "1.5rem", fontSize: "0.875rem", width: "100%" }}>
              <span>获取完整行业季度报告</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
        
        <footer style={{ marginTop: "3rem", textAlign: "center", opacity: 0.4, fontSize: "0.7rem" }}>
          数据说明：依据 2026 行业准则，本看板仅展示官方月度定稿及 MTD 实时估算数据，不包含任何违规周榜信息。
        </footer>
      </div>
    </main>
  );
}
