/*
  Warnings:

  - You are about to drop the column `usetId` on the `ordenes` table. All the data in the column will be lost.
  - Added the required column `userId` to the `ordenes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ordenes` DROP COLUMN `usetId`,
    ADD COLUMN `userId` VARCHAR(191) NOT NULL;
