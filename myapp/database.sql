/* create database */

create DATABASE stolenBikeDb;
USE stolenBikeDb;


/* create tables */
/**bikes**/
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

/** policeOfficers **/
CREATE TABLE IF NOT EXISTS `policeOfficers` (
  `id` int(11) NOT NULL,
  `login` varchar(200) NOT NULL,
  `passwd` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL 
);

ALTER TABLE `policeOfficers` ADD PRIMARY KEY (`id`);
ALTER TABLE `policeOfficers` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

INSERT INTO `policeOfficers` (`id`, `login`, `passwd`, `email`) VALUES
(1, 'police1', 'police1', 'police1@gmail.com');

/**stolenBikeCases resoved*/
CREATE TABLE IF NOT EXISTS  `stolenBikeCases` (
    `id` int(11) NOT NULL,
    `policeID` int NOT NULL,
    `bikeID` int NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (policeID) REFERENCES policeOfficers(id),
    FOREIGN KEY (bikeID) REFERENCES bikes(id)
);

ALTER TABLE `stolenBikeCases` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
