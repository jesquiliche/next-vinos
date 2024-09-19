/*
  Warnings:

  - You are about to alter the column `orden_id` on the `orden_direcciones` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `BigInt`.

*/
-- AlterTable
ALTER TABLE `orden_direcciones` MODIFY `orden_id` BIGINT NOT NULL;
