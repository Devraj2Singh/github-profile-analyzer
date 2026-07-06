import { Router } from "express";
import {
  analyzeGithubProfile,
  getAllProfiles,
  getProfileById,
} from "../controllers/github.controller";

const router = Router();

router.post("/analyze/:username", analyzeGithubProfile);
router.get("/profiles", getAllProfiles);
router.get("/profiles/:id", getProfileById);

export default router;