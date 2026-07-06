import express from "express";
import cors from "cors";
import githubRoutes from "./routes/github.routes";
import healthRoutes from "./routes/health.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_, res) => {
  res.json({
    success: true,
    message: "GitHub Profile Analyzer API",
  });
});

app.use("/api/github", githubRoutes);
app.use("/health", healthRoutes);

export default app;