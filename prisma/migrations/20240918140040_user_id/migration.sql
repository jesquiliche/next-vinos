/*
  Warnings:

  - Added the required column `usetId` to the `ordenes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ordenes` ADD COLUMN `usetId` VARCHAR(191) NOT NULL;
