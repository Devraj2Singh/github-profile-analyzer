import mysql from "mysql2/promise";
import { drizzle } from "drizzle-orm/mysql2";
import "dotenv/config";

let connection: mysql.Connection;

export let db: any;

export async function connectDB() {
  connection = await mysql.createConnection(process.env.DATABASE_URL!);

  db = drizzle(connection);

  console.log("✅ Connected to Railway MySQL");
}

export { connection };