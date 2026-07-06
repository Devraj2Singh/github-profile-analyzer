"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (_, res) => {
    res.status(200).json({
        success: true,
        status: "OK",
        message: "GitHub Profile Analyzer API is running",
        timestamp: new Date().toISOString(),
    });
});
exports.default = router;
//# sourceMappingURL=health.routes.js.map