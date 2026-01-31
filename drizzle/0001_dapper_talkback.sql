CREATE TABLE `newVisitors` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(100) NOT NULL,
	`phone` varchar(20),
	`email` varchar(320),
	`address` text,
	`visitDate` varchar(50),
	`firstTime` varchar(10) DEFAULT 'yes',
	`interests` text,
	`notes` text,
	`status` varchar(20) DEFAULT 'new',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `newVisitors_id` PRIMARY KEY(`id`)
);
