import {
  mysqlTable,
  int,
  varchar,
  text,
  datetime,
  timestamp,
} from "drizzle-orm/mysql-core";

export const githubProfiles = mysqlTable("github_profiles", {
  id: int("id").autoincrement().primaryKey(),

  username: varchar("username", { length: 100 }).notNull().unique(),
  name: varchar("name", { length: 255 }),
  bio: text("bio"),

  avatarUrl: text("avatar_url"),
  profileUrl: text("profile_url"),

  followers: int("followers").default(0),
  following: int("following").default(0),

  publicRepos: int("public_repos").default(0),
  publicGists: int("public_gists").default(0),

  totalStars: int("total_stars").default(0),

  mostUsedLanguage: varchar("most_used_language", {
    length: 100,
  }),

  topRepository: varchar("top_repository", {
    length: 255,
  }),

  accountCreatedAt: datetime("account_created_at"),

  analyzedAt: timestamp("analyzed_at").defaultNow(),
});