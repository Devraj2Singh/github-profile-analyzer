import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {
  res.status(200).json({
    success: true,
    status: "OK",
    message: "GitHub Profile Analyzer API is running",
    timestamp: new Date().toISOString(),
  });
});

export default router;