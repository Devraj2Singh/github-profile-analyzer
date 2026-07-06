"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("./config/db");
async function test() {
    await (0, db_1.connectDB)();
}
test().catch(console.error);
//# sourceMappingURL=test.js.map