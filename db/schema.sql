DROP DATABASE IF EXISTS `question_db`;
CREATE DATABASE `question_db`;

USE question_db;

CREATE TABLE question 
(
id int NOT NULL AUTO_INCREMENT NOT NULL,
topic VARCHAR(255) NOT NULL,
question VARCHAR(255) NOT NULL,
asked BOOLEAN NOT NULL,
understanding_level VARCHAR(255) NOT NULL,
date_created TIMESTAMP,
PRIMARY KEY (id)
);

