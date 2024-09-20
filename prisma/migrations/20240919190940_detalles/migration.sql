/*
  Warnings:

  - You are about to drop the column `cerveza_id` on the `detalles` table. All the data in the column will be lost.
  - Added the required column `product_id` to the `detalles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `detalles` DROP COLUMN `cerveza_id`,
    ADD COLUMN `product_id` BIGINT NOT NULL;
