import { Request, Response } from "express";
import githubService from "../services/github.service";
import { connection } from "../config/db";

export const analyzeGithubProfile = async (
  req: Request,
  res: Response
) => {
  try {
   const username = req.params.username as string;

if (!username) {
  return res.status(400).json({
    success: false,
    message: "Username is required",
  });
}

    const profile = await githubService.analyze(username);

    await connection.execute(
      `
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
    `,
      [
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
      ]
    );

    res.status(200).json({
      success: true,
      data: profile,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const getAllProfiles = async (
  req: Request,
  res: Response
) => {
  try {
    const [rows] = await connection.query(
      "SELECT * FROM github_profiles ORDER BY analyzed_at DESC"
    );

    res.json(rows);
  } catch (err: any) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const getProfileById = async (
  req: Request,
  res: Response
) => {
  try {
    const [rows]: any = await connection.query(
      "SELECT * FROM github_profiles WHERE id=?",
      [req.params.id]
    );

    if (rows.length === 0) {
      return res.status(404).json({
        message: "Profile not found",
      });
    }

    res.json(rows[0]);
  } catch (err: any) {
    res.status(500).json({
      message: err.message,
    });
  }
};