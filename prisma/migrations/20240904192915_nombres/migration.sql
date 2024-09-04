/*
  Warnings:

  - A unique constraint covering the columns `[nombre]` on the table `denominaciones` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nombre]` on the table `productos` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nombre]` on the table `tipos` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `denominaciones_nombre_key` ON `denominaciones`(`nombre`);

-- CreateIndex
CREATE UNIQUE INDEX `productos_nombre_key` ON `productos`(`nombre`);

-- CreateIndex
CREATE UNIQUE INDEX `tipos_nombre_key` ON `tipos`(`nombre`);

-- CreateIndex
CREATE UNIQUE INDEX `users_name_key` ON `users`(`name`);
