CREATE TABLE `news` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(200) NOT NULL,
	`excerpt` text,
	`content` text NOT NULL,
	`category` varchar(50) DEFAULT 'announcement',
	`imageUrl` varchar(500),
	`imageKey` varchar(500),
	`status` enum('draft','published','archived') DEFAULT 'draft',
	`authorId` int,
	`viewCount` int DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`publishedAt` timestamp,
	CONSTRAINT `news_id` PRIMARY KEY(`id`)
);
