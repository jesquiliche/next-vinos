/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `userId` VARCHAR(255) NOT NULL;

-- CreateTable
CREATE TABLE `ordenes` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `user_id` BIGINT NOT NULL,
    `subtotal` DECIMAL(8, 2) NOT NULL,
    `total` DECIMAL(8, 2) NOT NULL,
    `iva` DECIMAL(8, 2) NOT NULL,
    `pagado` VARCHAR(1) NOT NULL,
    `entregado` VARCHAR(1) NOT NULL,
    `transactionId` VARCHAR(255) NULL,
    `articulos` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `detalles` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `orden_id` BIGINT NOT NULL,
    `cerveza_id` BIGINT NOT NULL,
    `precio` DECIMAL(8, 2) NOT NULL,
    `cantidad` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `direcciones` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NOT NULL,
    `apellidos` VARCHAR(150) NOT NULL,
    `calle` VARCHAR(150) NOT NULL,
    `numero` VARCHAR(5) NOT NULL,
    `escalera` VARCHAR(5) NULL,
    `piso` VARCHAR(20) NULL,
    `puerta` VARCHAR(5) NULL,
    `poblacion` VARCHAR(5) NOT NULL,
    `provincia` VARCHAR(2) NOT NULL,
    `user_id` BIGINT NOT NULL,
    `telefono` VARCHAR(15) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orden_direcciones` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NOT NULL,
    `apellidos` VARCHAR(150) NOT NULL,
    `calle` VARCHAR(150) NOT NULL,
    `numero` VARCHAR(5) NOT NULL,
    `escalera` VARCHAR(5) NULL,
    `piso` VARCHAR(20) NULL,
    `puerta` VARCHAR(5) NULL,
    `poblacion` VARCHAR(5) NOT NULL,
    `provincia` VARCHAR(2) NOT NULL,
    `user_id` BIGINT NOT NULL,
    `orden_id` BIGINT NOT NULL,
    `telefono` VARCHAR(15) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `users_userId_key` ON `users`(`userId`);
