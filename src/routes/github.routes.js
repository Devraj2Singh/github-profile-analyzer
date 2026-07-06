"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const github_controller_1 = require("../controllers/github.controller");
const router = (0, express_1.Router)();
router.post("/analyze/:username", github_controller_1.analyzeGithubProfile);
router.get("/profiles", github_controller_1.getAllProfiles);
router.get("/profiles/:id", github_controller_1.getProfileById);
exports.default = router;
//# sourceMappingURL=github.routes.js.map