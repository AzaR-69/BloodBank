-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 22, 2021 at 11:28 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bbdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `donor`
--

CREATE TABLE `donor` (
  `donorid` bigint(20) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `blood_group` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `active` bit(1) NOT NULL,
  `age` int(11) NOT NULL,
  `weight` int(11) NOT NULL,
  `failed` bit(1) NOT NULL,
  `donated_date` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `donor`
--

INSERT INTO `donor` (`donorid`, `address`, `blood_group`, `email`, `gender`, `mobile`, `name`, `active`, `age`, `weight`, `failed`, `donated_date`) VALUES
(3, 'No:4, Valsarvakkam,Chennai', 'A+', 'sow@gmail.com', 'Female', '9999999999', 'Sowmya Ramesh', b'1', 22, 50, b'0', '2021-06-16'),
(21, 'no:3 ', 'A+', 'aiden@wd.com', 'Male', '9874123654', 'Aiden Pierce A', b'1', 40, 60, b'0', '2021-06-22'),
(6, 'No:420, Anna nagar, Chennai', 'B-', 'kiro@gmail.com', 'Male', '6557892145', 'Kiran J', b'1', 21, 69, b'0', '2021-06-16'),
(7, 'No:420 Madurai', 'AB-', 'kishore@gmail.com', 'Male', '9741302685', 'KK', b'0', 21, 50, b'1', '2021-04-10'),
(12, 'Patti street, kadu malai', 'AB-', 'kumara@gmail.com', 'Male', '9875102399', 'Kumar A', b'1', 41, 68, b'0', '2021-06-16');

-- --------------------------------------------------------

--
-- Table structure for table `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(25);

-- --------------------------------------------------------

--
-- Table structure for table `requests`
--

CREATE TABLE `requests` (
  `request_id` bigint(20) NOT NULL,
  `age` int(11) NOT NULL,
  `blood_group` varchar(255) DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `patient_name` varchar(255) DEFAULT NULL,
  `reason` varchar(255) DEFAULT NULL,
  `unit` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `response` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `requests`
--

INSERT INTO `requests` (`request_id`, `age`, `blood_group`, `date`, `email`, `patient_name`, `reason`, `unit`, `status`, `response`) VALUES
(9, 69, 'B-', '2021-06-21', 'jobi@gmail.com', 'Peter', 'Gunshot', 75, 1, 'Available at Saveetha hospital '),
(4, 45, 'AB-', '2021-06-15', 'shah@gmail.com', 'Ramesh', 'Fell down from 3rd floor', 100, 0, 'Currently unavailable contact Munna blood bank'),
(6, 68, 'AB-', '2021-06-17', 'has@gmail.com', 'Gordon Ramasamy', 'Burnt his hand while cooking', 25, 1, 'Available at Kaveri hospital'),
(7, 21, 'O+', '2021-06-17', 'shah@gmail.com', 'Sultan', 'Motorcycle Accident', 60, 0, 'Unavailable');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `mobile`, `name`, `password`, `role`, `username`) VALUES
('1234-7889-6678', 'jobi@gmail.com', '1236549871', 'Jeevitha S', '$2a$10$XOS/UFYPx3YcJ5Yd7.CfnOYbS8wNf1yVmDkz5XD5X1qxTVRlnSo7C', 'ROLE_USER', 'jobz'),
('170801099', 'azar@gmail.com', '7890123654', 'Azaruddin', '$2a$10$P78u59za5td7b27HL0RusOkCniCsISfW5iMcXe5WlCk6FzLjy/pDO', 'ROLE_ADMIN', 'admin_azar'),
('170801100', 'saravana@gmail.com', '9632587410', 'Saravana', '$2a$10$wKRFmh3YYBgXRmfpArcVleCzI53.aisjBUlZKbTfMWrNn62IGZJpy', 'ROLE_ADMIN', 'admin_saravana'),
('170801101', 'jd@gmail.com', '9632583321', 'JD', '$2a$10$/ZWnK321ask.AlYZcCpqLeJ3s.lFp6ErEfOsKotKJNPPs5bShrpbu', 'ROLE_ADMIN', 'admin_jd'),
('6987-7458-1254', 'aiden@wd.com', '9874123654', 'Aiden Pierce A', '$2a$10$yD3sqwvdRxYckCNJQeEJYO/gDNpty7v3K0ouvG3iABu51ngHaVEs6', 'ROLE_USER', 'aiden123'),
('9632-7845-1256', 'sidra@gmail.com', '7896412530', 'Sidra Mirza', '$2a$10$EWZ2AQGwtlnYseDFVJtTwu9vg.v5Ibv2T/V5SAfYfXz2wkN8qy35y', 'ROLE_USER', 'sidra_m');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `donor`
--
ALTER TABLE `donor`
  ADD PRIMARY KEY (`donorid`);

--
-- Indexes for table `requests`
--
ALTER TABLE `requests`
  ADD PRIMARY KEY (`request_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UKr43af9ap4edm43mmtq01oddj6` (`username`),
  ADD UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `donor`
--
ALTER TABLE `donor`
  MODIFY `donorid` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `requests`
--
ALTER TABLE `requests`
  MODIFY `request_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
