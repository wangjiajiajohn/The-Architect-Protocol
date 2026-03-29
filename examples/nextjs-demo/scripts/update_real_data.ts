import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import path from "path";

// Initialize Prisma with the correctly detected adapter and path
const dbPath = path.join(process.cwd(), "dev.db");
const adapter = new PrismaBetterSqlite3({ url: "file:" + dbPath });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Updating database with REAL 2026 Sales Data...");

  const brandsData = [
    {
      name: "问界 (AITO)",
      sales: [
        { date: new Date("2026-01-31"), amount: 40016, period: "monthly" },
        { date: new Date("2026-02-28"), amount: 18050, period: "monthly" },
      ]
    },
    {
      name: "小米 (Xiaomi)",
      sales: [
        { date: new Date("2026-01-31"), amount: 39100, period: "monthly" },
        { date: new Date("2026-02-28"), amount: 20200, period: "monthly" },
      ]
    },
    {
      name: "蔚来 (NIO)",
      sales: [
        { date: new Date("2026-01-31"), amount: 27182, period: "monthly" },
        { date: new Date("2026-02-28"), amount: 20797, period: "monthly" },
      ]
    }
  ];

  for (const item of brandsData) {
    const brand = await prisma.brand.findUnique({ where: { name: item.name } });
    if (brand) {
      // Clear old monthly data for these specific brands to ensure a clean update
      await prisma.salesData.deleteMany({
        where: { brandId: brand.id, period: "monthly" }
      });

      for (const s of item.sales) {
        await prisma.salesData.create({
          data: {
            brandId: brand.id,
            amount: s.amount,
            period: s.period,
            date: s.date
          }
        });
      }
    }
  }

  console.log("Database updated successfully with real 2026 figures.");
}

main().catch(console.error).finally(() => prisma.$disconnect());
