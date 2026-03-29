import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import path from "path";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Use an absolute path to ensure the database is found regardless of where the app is started
const dbPath = path.join(process.cwd(), "dev.db");
const adapter = new PrismaBetterSqlite3({ url: "file:" + dbPath });

export const prisma = new PrismaClient({ adapter });

// Temporarily disabling global cache for debugging
// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
