/*
  Warnings:

  - You are about to drop the column `product_id` on the `detalles` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `orden_direcciones` table. All the data in the column will be lost.
  - Added the required column `cerveza_id` to the `detalles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `detalles` DROP COLUMN `product_id`,
    ADD COLUMN `cerveza_id` BIGINT NOT NULL;

-- AlterTable
ALTER TABLE `orden_direcciones` DROP COLUMN `userId`;

-- AddForeignKey
ALTER TABLE `detalles` ADD CONSTRAINT `detalles_orden_id_fkey` FOREIGN KEY (`orden_id`) REFERENCES `ordenes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
