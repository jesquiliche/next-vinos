-- CreateTable
CREATE TABLE `provincia` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `codigo` VARCHAR(2) NOT NULL,
    `nombre` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `provincias_nombre_unique`(`nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
