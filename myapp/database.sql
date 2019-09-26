/* create database */

create DATABASE stolenBikeDb;
USE stolenBikeDb;


/* create tables */
CREATE TABLE IF NOT EXISTS `bikes` (
  `id` int(11) NOT NULL,
  `model` varchar(200) NOT NULL,
  `color` varchar(200) NOT NULL,
  `frameNumber` varchar(200) NOT NULL,
  `city` varchar(200) NOT NULL,
  `stolenDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `description` varchar(200) NOT NULL
);

ALTER TABLE `bikes` ADD PRIMARY KEY (`id`);
ALTER TABLE `bikes` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;


INSERT INTO `bikes` (`id`, `model`, `color`, `frameNumber`,`city`,`stolenDate`,`description`) VALUES
(1, 'Kinesis Tripster ATR', 'Silver titanium', '1','Strasbourg','2019-04-10 23:50:40','Description');