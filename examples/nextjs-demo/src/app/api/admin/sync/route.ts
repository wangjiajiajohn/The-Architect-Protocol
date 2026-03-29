import { NextResponse } from "next/server";
import { syncSalesData } from "@/lib/scraper";
import { getSession } from "@/lib/auth";

export async function POST() {
  const session = await getSession();

  // Basic security check: Only logged in users can sync
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const result = await syncSalesData();
    return NextResponse.json(result);
  } catch (error: any) {
    console.error("API Sync Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
