-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-11-2025 a las 06:08:18
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `empleados_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleados`
--

CREATE TABLE `empleados` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellidos` varchar(80) NOT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `correo` varchar(100) NOT NULL,
  `direccion` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `empleados`
--

INSERT INTO `empleados` (`id`, `nombre`, `apellidos`, `telefono`, `correo`, `direccion`) VALUES
(1, 'jesus', 'Sanchez Martinez', '4427997038', 'jesus.sanchez@example.com', 'Av. platon #123'),
(2, 'Carlos', 'Ramírez López', '4443219876', 'carlos.ramirez@example.com', 'Av. Reforma 102'),
(3, 'María', 'Hernández Ortiz', '4429837461', 'maria.hdz@example.com', 'Calle 5 de Mayo 33'),
(4, 'Luis', 'Gómez Torres', '4421239847', 'luis.gomez@example.com', 'Col. Centro #45'),
(5, 'Ana', 'Martínez Rivera', '4429841275', 'ana.martinez@example.com', 'Av. Juárez 221'),
(6, 'Jorge', 'Pérez Castillo', '4426123498', 'jorge.perez@example.com', 'Calle Hidalgo 65'),
(7, 'Laura', 'Sánchez Aguirre', '4429872345', 'laura.sanchez@example.com', 'Priv. Las Palmas 11'),
(8, 'Eduardo', 'Flores Ruiz', '4427891234', 'edu.flores@example.com', 'Calle Luna 900'),
(9, 'Daniela', 'Mendoza Ríos', '4422349876', 'daniela.mendoza@example.com', 'Calle Sol 304'),
(10, 'Ricardo', 'Nava Ortega', '4422147896', 'ricardo.nava@example.com', 'Av. Insurgentes 780'),
(11, 'Patricia', 'Cano Salas', '4426713498', 'paty.cano@example.com', 'Col. Roma Sur 18'),
(12, 'Alejandro', 'Vargas Molina', '4425612378', 'alejandro.vargas@example.com', 'Calle Fresno #102'),
(13, 'Fernanda', 'López Durán', '4429832746', 'fer.lopez@example.com', 'Av. Morelos 120'),
(14, 'Sergio', 'Bautista León', '4427641928', 'sergio.bautista@example.com', 'Calle Cedros 75'),
(15, 'Karina', 'Salazar Pineda', '4427283946', 'karina.salazar@example.com', 'Calle Gardenias 54'),
(16, 'Roberto', 'Rojas Estrada', '4427891234', 'roberto.rojas@example.com', 'Av. Universidad 540'),
(17, 'Jessica', 'García Ponce', '4423148796', 'jess.garcia@example.com', 'Col. Del Valle 99'),
(18, 'Héctor', 'Campos Rentería', '4428971245', 'hector.campos@example.com', 'Calle Primavera 12'),
(19, 'Sofía', 'Delgado Bautista', '4426123789', 'sofia.delgado@example.com', 'Av. Independencia 401'),
(20, 'Miguel', 'Padilla Ortiz', '4427468391', 'miguel.padilla@example.com', 'Cerrada Palma 70'),
(21, 'Claudia', 'Reyes Moreno', '4429374628', 'claudia.reyes@example.com', 'Calle Naranjos 23'),
(22, 'Javier', 'Silva Ávila', '4427619248', 'javier.silva@example.com', 'Col. San Pedro 303'),
(23, 'Lucía', 'Gutiérrez Peña', '4422983647', 'lucia.gutierrez@example.com', 'Av. Hidalgo 800'),
(24, 'Marco', 'Castañeda Ruiz', '4426812379', 'marco.castaneda@example.com', 'Calle Robles 14'),
(25, 'Paola', 'Estrada Ramos', '4423687942', 'paola.estrada@example.com', 'Fracc. Los Olivos 121'),
(26, 'Iván', 'Paredes Mendoza', '4428976421', 'ivan.paredes@example.com', 'Calle Tulipanes 50'),
(27, 'Gabriela', 'Haro Villalobos', '4421783649', 'gabriela.haro@example.com', 'Col. Santa Anita 77'),
(28, 'Tomás', 'Vargas Sosa', '4429837162', 'tomas.vargas@example.com', 'Av. México 230'),
(29, 'Elena', 'Blanco Ferreira', '4428173649', 'elena.blanco@example.com', 'Calle Jazmín 19'),
(30, 'Rafael', 'Cruz Peña', '4424618729', 'rafael.cruz@example.com', 'Col. Industrial 12'),
(33, 'Amanda', 'Perez Prado', '4423456789', 'amanda.perez@exmple.com', 'Av. Nueva Menchaca');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  `user_mail` varchar(50) NOT NULL,
  `user_password` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_mail`, `user_password`) VALUES
(1, '[jesus]', '[jesus@gmail.com]', '[1234]');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `empleados`
--
ALTER TABLE `empleados`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `correo` (`correo`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `empleados`
--
ALTER TABLE `empleados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
