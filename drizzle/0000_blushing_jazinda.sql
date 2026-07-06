CREATE TABLE `github_profiles` (
	`id` int AUTO_INCREMENT NOT NULL,
	`username` varchar(100) NOT NULL,
	`name` varchar(255),
	`bio` text,
	`avatar_url` text,
	`profile_url` text,
	`followers` int DEFAULT 0,
	`following` int DEFAULT 0,
	`public_repos` int DEFAULT 0,
	`public_gists` int DEFAULT 0,
	`total_stars` int DEFAULT 0,
	`most_used_language` varchar(100),
	`top_repository` varchar(255),
	`account_created_at` datetime,
	`analyzed_at` timestamp DEFAULT (now()),
	CONSTRAINT `github_profiles_id` PRIMARY KEY(`id`),
	CONSTRAINT `github_profiles_username_unique` UNIQUE(`username`)
);
