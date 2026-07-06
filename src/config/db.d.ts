import mysql from "mysql2/promise";
import { drizzle } from "drizzle-orm/mysql2";
import "dotenv/config";
declare let connection: mysql.Connection;
export declare let db: ReturnType<typeof drizzle>;
export declare function connectDB(): Promise<void>;
export { connection };
//# sourceMappingURL=db.d.ts.map