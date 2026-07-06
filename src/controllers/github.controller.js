"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfileById = exports.getAllProfiles = exports.analyzeGithubProfile = void 0;
const express_1 = require("express");
const github_service_1 = __importDefault(require("../services/github.service"));
const db_1 = require("../config/db");
const analyzeGithubProfile = async (req, res) => {
    try {
        const { username } = req.params;
        const profile = await github_service_1.default.analyze(username);
        await db_1.connection.execute(`
      INSERT INTO github_profiles
      (
        username,
        name,
        bio,
        avatar_url,
        profile_url,
        followers,
        following,
        public_repos,
        public_gists,
        total_stars,
        most_used_language,
        top_repository,
        account_created_at
      )
      VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)
      ON DUPLICATE KEY UPDATE

      name = VALUES(name),
      bio = VALUES(bio),
      avatar_url = VALUES(avatar_url),
      profile_url = VALUES(profile_url),
      followers = VALUES(followers),
      following = VALUES(following),
      public_repos = VALUES(public_repos),
      public_gists = VALUES(public_gists),
      total_stars = VALUES(total_stars),
      most_used_language = VALUES(most_used_language),
      top_repository = VALUES(top_repository),
      account_created_at = VALUES(account_created_at)
    `, [
            profile.username,
            profile.name,
            profile.bio,
            profile.avatarUrl,
            profile.profileUrl,
            profile.followers,
            profile.following,
            profile.publicRepos,
            profile.publicGists,
            profile.totalStars,
            profile.mostUsedLanguage,
            profile.topRepository,
            profile.accountCreatedAt,
        ]);
        res.status(200).json({
            success: true,
            data: profile,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
};
exports.analyzeGithubProfile = analyzeGithubProfile;
const getAllProfiles = async (req, res) => {
    try {
        const [rows] = await db_1.connection.query("SELECT * FROM github_profiles ORDER BY analyzed_at DESC");
        res.json(rows);
    }
    catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
};
exports.getAllProfiles = getAllProfiles;
const getProfileById = async (req, res) => {
    try {
        const [rows] = await db_1.connection.query("SELECT * FROM github_profiles WHERE id=?", [req.params.id]);
        if (rows.length === 0) {
            return res.status(404).json({
                message: "Profile not found",
            });
        }
        res.json(rows[0]);
    }
    catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
};
exports.getProfileById = getProfileById;
//# sourceMappingURL=github.controller.js.map