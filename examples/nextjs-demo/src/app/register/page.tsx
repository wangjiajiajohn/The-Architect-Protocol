"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { UserPlus, User, Lock, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to register");
      }

      setSuccess(true);
      setTimeout(() => {
        router.push("/dashboard");
        router.refresh();
      }, 1500);
    } catch (err: any) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <div className="auth-card">
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ 
            background: "linear-gradient(135deg, var(--primary), var(--secondary))",
            width: "56px", height: "56px", borderRadius: "16px",
            display: "flex", alignItems: "center", justifyItems: "center",
            margin: "0 auto 1rem", justifyContent: "center"
          }}>
            <UserPlus size={28} color="white" />
          </div>
          <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>Create Account</h1>
          <p style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>
            Join us today and experience the difference
          </p>
        </div>

        {error && (
          <div className="status-msg status-error">
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="status-msg status-success">
            <CheckCircle2 size={18} />
            <span>Registration successful! Redirecting...</span>
          </div>
        )}

        <form onSubmit={handleRegister}>
          <div className="input-group">
            <label>Username</label>
            <div style={{ position: "relative" }}>
              <User size={18} style={{ 
                position: "absolute", left: "1rem", top: "50%", 
                transform: "translateY(-50%)", color: "var(--text-muted)" 
              }} />
              <input
                type="text"
                className="input-field"
                style={{ paddingLeft: "3rem" }}
                placeholder="Choose a username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>
            <div style={{ position: "relative" }}>
              <Lock size={18} style={{ 
                position: "absolute", left: "1rem", top: "50%", 
                transform: "translateY(-50%)", color: "var(--text-muted)" 
              }} />
              <input
                type="password"
                className="input-field"
                style={{ paddingLeft: "3rem" }}
                placeholder="Choose a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary" disabled={loading || success}>
            {loading ? <Loader2 className="animate-spin" size={20} /> : "Create Account"}
          </button>
        </form>

        <p className="auth-link">
          Already have an account? <Link href="/login">Sign In</Link>
        </p>
      </div>
    </main>
  );
}
