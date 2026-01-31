CREATE TABLE `eventRegistrations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`eventName` varchar(200) NOT NULL,
	`eventDate` varchar(50) NOT NULL,
	`name` varchar(100) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(20),
	`numberOfPeople` int DEFAULT 1,
	`notes` text,
	`status` varchar(20) DEFAULT 'registered',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `eventRegistrations_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `prayerRequests` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(100) NOT NULL,
	`email` varchar(320),
	`phone` varchar(20),
	`title` varchar(200) NOT NULL,
	`content` text NOT NULL,
	`category` varchar(50) DEFAULT 'general',
	`isPublic` varchar(10) DEFAULT 'yes',
	`status` varchar(20) DEFAULT 'active',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `prayerRequests_id` PRIMARY KEY(`id`)
);
