-- AddForeignKey
ALTER TABLE `ordenes` ADD CONSTRAINT `ordenes_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
