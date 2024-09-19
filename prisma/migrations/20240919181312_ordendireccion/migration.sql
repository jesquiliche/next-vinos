/*
  Warnings:

  - Added the required column `userId` to the `orden_direcciones` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `orden_direcciones` ADD COLUMN `userId` VARCHAR(255) NOT NULL,
    MODIFY `orden_id` VARCHAR(255) NOT NULL;
