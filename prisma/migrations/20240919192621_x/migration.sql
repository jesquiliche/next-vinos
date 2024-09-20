/*
  Warnings:

  - Added the required column `userId` to the `orden_direcciones` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `orden_direcciones` ADD COLUMN `userId` VARCHAR(191) NOT NULL;
