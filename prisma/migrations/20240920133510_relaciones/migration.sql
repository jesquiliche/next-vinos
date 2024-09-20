/*
  Warnings:

  - You are about to alter the column `product_id` on the `detalles` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `UnsignedBigInt`.
  - You are about to alter the column `user_id` on the `ordenes` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `UnsignedBigInt`.

*/
-- AlterTable
ALTER TABLE `detalles` MODIFY `product_id` BIGINT UNSIGNED NOT NULL;

-- AlterTable
ALTER TABLE `ordenes` MODIFY `user_id` BIGINT UNSIGNED NOT NULL;
