-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 24, 2017 at 12:43 PM
-- Server version: 5.7.17
-- PHP Version: 5.6.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ionic`
--
DROP DATABASE IF EXISTS `ionic`;
CREATE DATABASE IF NOT EXISTS `ionic` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `ionic`;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(480) NOT NULL,
  `password` text NOT NULL,
  `salt` text NOT NULL,
  `referral_id` int(11) DEFAULT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `salt`, `referral_id`, `created`, `modified`) VALUES
(1, 'rickykennedy', 'rickykennedy.development@gmail.com', '13d6aee0bb02d2619982ac265a36334a0ae4f772478d757f913150261cd60b5f', '37870847458808203eb1240.57392558', NULL, '2017-01-19 17:08:19', '2017-01-19 17:08:19'),
(2, 'ricky', 'rickyicezz@gmail.com', 'dc5bb805daac7fac7ff2ab8d05c31b09ba991ba60cd3ca942af757f9c9a34465', '177629613358857545df4469.17074824', NULL, '2017-01-23 11:15:17', '2017-01-23 11:15:17'),
(3, 'ricky', 'rickyicezz@gmail.com', '4ec219570272cb95307b080eb18388ea3b44c990a02bcf18d2d399e073b4e0f5', '102600059458857547dd77d6.42294622', NULL, '2017-01-23 11:15:19', '2017-01-23 11:15:19');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
