-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 07, 2021 at 05:25 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `spm_librarymanagementsystem`
--
CREATE DATABASE IF NOT EXISTS `spm_librarymanagementsystem` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `spm_librarymanagementsystem`;

-- --------------------------------------------------------

--
-- Table structure for table `books_tb`
--

DROP TABLE IF EXISTS `books_tb`;
CREATE TABLE IF NOT EXISTS `books_tb` (
  `Book_ID` int(11) NOT NULL,
  `ISBN_NO` varchar(50) NOT NULL,
  `Book_Title` varchar(200) NOT NULL,
  `Author` varchar(100) NOT NULL,
  `Publish_Date` date NOT NULL,
  `Adding_Date` date NOT NULL,
  `Pages` int(11) NOT NULL,
  `Price` float NOT NULL,
  `Source` varchar(255) NOT NULL,
  `Remarks` varchar(255) NOT NULL,
  PRIMARY KEY (`Book_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
