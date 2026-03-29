import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import path from "path";

const dbPath = path.join(process.cwd(), "dev.db");
const adapter = new PrismaBetterSqlite3({ url: "file:" + dbPath });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding NEV Sales Data...");

  // Create Brands
  const nio = await prisma.brand.upsert({
    where: { name: "蔚来 (NIO)" },
    update: { color: "#04C3E1" }, // NIO Blue
    create: { name: "蔚来 (NIO)", color: "#04C3E1" },
  });

  const xiaomi = await prisma.brand.upsert({
    where: { name: "小米 (Xiaomi)" },
    update: { color: "#FF6700" }, // Xiaomi Orange
    create: { name: "小米 (Xiaomi)", color: "#FF6700" },
  });

  const aito = await prisma.brand.upsert({
    where: { name: "问界 (AITO)" },
    update: { color: "#5B8FF9" }, // AITO/Professional Blue
    create: { name: "问界 (AITO)", color: "#5B8FF9" },
  });

  // Create Sales Data (Mocking last 4 weeks)
  const brands = [nio, xiaomi, aito];
  const baseSales = [4500, 6200, 8900]; // NIO, Xiaomi, AITO base

  for (let i = 0; i < 4; i++) {
    const date = new Date();
    date.setDate(date.getDate() - (i * 7));

    for (let j = 0; j < brands.length; j++) {
      await prisma.salesData.create({
        data: {
          brandId: brands[j].id,
          amount: baseSales[j] + Math.floor(Math.random() * 1000) - 500,
          period: "weekly",
          date: date,
        },
      });
    }
  }

  // Create Insights
  await prisma.industryInsight.create({
    data: {
      title: "小米 SU7 交付速度显著提升",
      content: "随着工厂二期效率优化，及供应链稳定性增强，小米汽车周交付量稳定在 6k 左右，四季度有望突破单月 2.5 万台。",
      type: "analysis",
    },
  });

  await prisma.industryInsight.create({
    data: {
      title: "问界 M9 持续领跑高端市场",
      content: "问界 M9 在 50 万以上豪华车型中订单占比持续扩大，华为高阶智驾 ASD 3.0 的推送显著增强了产品竞争力。",
      type: "analysis",
    },
  });

  console.log("Seeding completed.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // We don't need to disconnect manually as it's an adapter
  });
