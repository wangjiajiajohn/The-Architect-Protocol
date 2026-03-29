"use client";

import { useState, useEffect } from "react";
import { RefreshCw, CheckCircle2, AlertCircle } from "lucide-react";

export default function DataSyncManager() {
  const [isMounted, setIsMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSync = async () => {
    setLoading(true);
    setStatus("idle");
    setMessage("");

    try {
      const response = await fetch("/api/admin/sync", { method: "POST" });
      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setMessage(data.message || "同步成功！");
        // Reload to show fresh data
        setTimeout(() => window.location.reload(), 1500);
      } else {
        setStatus("error");
        setMessage(data.message || "同步失败，请稍后重试。");
      }
    } catch {
      setStatus("error");
      setMessage("连接服务器失败");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.5rem" }}>
      <button 
        onClick={handleSync} 
        disabled={loading}
        className={`btn ${status === 'success' ? 'btn-success' : status === 'error' ? 'btn-danger' : 'btn-secondary'}`}
        style={{ 
          padding: "0.75rem 1.25rem", fontSize: "0.875rem", borderRadius: "12px",
          display: "flex", alignItems: "center", gap: "0.5rem", width: "auto"
        }}
      >
        <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
        <span>
          {isMounted 
            ? (loading ? "正在抓取最新数据..." : (status === 'success' ? "同步成功" : (status === 'error' ? "同步失败" : "同步月度销量数据"))) 
            : "同步月度销量数据"
          }
        </span>
      </button>
      {message && (
        <p style={{ 
          fontSize: "0.7rem", 
          color: status === 'success' ? "var(--success)" : "var(--error)",
          display: "flex", alignItems: "center", gap: "0.25rem"
        }}>
          {status === 'success' ? <CheckCircle2 size={12} /> : <AlertCircle size={12} />}
          {message}
        </p>
      )}
    </div>
  );
}
