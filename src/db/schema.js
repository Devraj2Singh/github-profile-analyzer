"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.githubProfiles = void 0;
const mysql_core_1 = require("drizzle-orm/mysql-core");
exports.githubProfiles = (0, mysql_core_1.mysqlTable)("github_profiles", {
    id: (0, mysql_core_1.int)("id").autoincrement().primaryKey(),
    username: (0, mysql_core_1.varchar)("username", { length: 100 }).notNull().unique(),
    name: (0, mysql_core_1.varchar)("name", { length: 255 }),
    bio: (0, mysql_core_1.text)("bio"),
    avatarUrl: (0, mysql_core_1.text)("avatar_url"),
    profileUrl: (0, mysql_core_1.text)("profile_url"),
    followers: (0, mysql_core_1.int)("followers").default(0),
    following: (0, mysql_core_1.int)("following").default(0),
    publicRepos: (0, mysql_core_1.int)("public_repos").default(0),
    publicGists: (0, mysql_core_1.int)("public_gists").default(0),
    totalStars: (0, mysql_core_1.int)("total_stars").default(0),
    mostUsedLanguage: (0, mysql_core_1.varchar)("most_used_language", {
        length: 100,
    }),
    topRepository: (0, mysql_core_1.varchar)("top_repository", {
        length: 255,
    }),
    accountCreatedAt: (0, mysql_core_1.datetime)("account_created_at"),
    analyzedAt: (0, mysql_core_1.timestamp)("analyzed_at").defaultNow(),
});
//# sourceMappingURL=schema.js.map