import axios from "axios";

export interface GithubAnalysis {
  username: string;
  name: string | null;
  bio: string | null;
  avatarUrl: string;
  profileUrl: string;
  followers: number;
  following: number;
  publicRepos: number;
  publicGists: number;
  accountCreatedAt: Date;
  totalStars: number;
  mostUsedLanguage: string | null;
  topRepository: string | null;
}

class GithubService {
  async analyze(username: string): Promise<GithubAnalysis> {
    const { data: user } = await axios.get(
      `https://api.github.com/users/${username}`
    );

    const { data: repos } = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=100`
    );

    let totalStars = 0;
    let topRepository: string | null = null;
    let highestStars = -1;

    const languageMap: Record<string, number> = {};

    for (const repo of repos) {
      totalStars += repo.stargazers_count;

      if (repo.language) {
        languageMap[repo.language] =
          (languageMap[repo.language] || 0) + 1;
      }

      if (repo.stargazers_count > highestStars) {
        highestStars = repo.stargazers_count;
        topRepository = repo.name;
      }
    }

    let mostUsedLanguage: string | null = null;
    let count = 0;

    for (const key in languageMap) {
      if (languageMap[key] > count) {
        count = languageMap[key];
        mostUsedLanguage = key;
      }
    }

    return {
      username: user.login,
      name: user.name,
      bio: user.bio,
      avatarUrl: user.avatar_url,
      profileUrl: user.html_url,
      followers: user.followers,
      following: user.following,
      publicRepos: user.public_repos,
      publicGists: user.public_gists,
      accountCreatedAt: new Date(user.created_at),
      totalStars,
      mostUsedLanguage,
      topRepository,
    };
  }
}

export default new GithubService();