"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class GithubService {
    async analyze(username) {
        const { data: user } = await axios_1.default.get(`https://api.github.com/users/${username}`);
        const { data: repos } = await axios_1.default.get(`https://api.github.com/users/${username}/repos?per_page=100`);
        let totalStars = 0;
        let topRepository = null;
        let highestStars = -1;
        const languageMap = {};
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
        let mostUsedLanguage = null;
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
exports.default = new GithubService();
//# sourceMappingURL=github.service.js.map