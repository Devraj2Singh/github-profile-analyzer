"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = exports.db = void 0;
exports.connectDB = connectDB;
const promise_1 = __importDefault(require("mysql2/promise"));
const mysql2_1 = require("drizzle-orm/mysql2");
require("dotenv/config");
let connection;
async function connectDB() {
    exports.connection = connection = await promise_1.default.createConnection(process.env.DATABASE_URL);
    exports.db = (0, mysql2_1.drizzle)(connection);
    console.log("✅ Connected to Railway MySQL");
}
//# sourceMappingURL=db.js.map