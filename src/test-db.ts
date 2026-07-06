import mysql from "mysql2/promise";
import "dotenv/config";

async function createTable() {
  const connection = await mysql.createConnection(process.env.DATABASE_URL!);

  await connection.execute(`
    CREATE TABLE IF NOT EXISTS github_profiles (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(100) UNIQUE NOT NULL,
      name VARCHAR(255),
      bio TEXT,
      avatar_url TEXT,
      profile_url TEXT,
      followers INT DEFAULT 0,
      following INT DEFAULT 0,
      public_repos INT DEFAULT 0,
      public_gists INT DEFAULT 0,
      total_stars INT DEFAULT 0,
      most_used_language VARCHAR(100),
      top_repository VARCHAR(255),
      account_created_at DATETIME,
      analyzed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  console.log("✅ Table Created Successfully");

  await connection.end();
}

createTable().catch(console.error);