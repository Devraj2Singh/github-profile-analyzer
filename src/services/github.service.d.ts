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
declare class GithubService {
    analyze(username: string): Promise<GithubAnalysis>;
}
declare const _default: GithubService;
export default _default;
//# sourceMappingURL=github.service.d.ts.map