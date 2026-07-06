import { connectDB } from "./config/db";

async function test() {
  await connectDB();
}

test().catch(console.error);