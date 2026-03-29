"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  };

  return (
    <button onClick={handleLogout} className="btn btn-secondary" style={{ width: "auto" }}>
      <LogOut size={18} />
      <span>Sign Out</span>
    </button>
  );
}
