drop database if exists etrade_db;
create database etrade_db;


-- To be removed after models are created based off this schema

CREATE TABLE IF NOT EXISTS `etrade_db`.`category_discount` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `duration_weeks` INT NOT NULL,
  `discount_percent` DECIMAL(10,2) NULL DEFAULT NULL,
  `active` TINYINT(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE IF NOT EXISTS `etrade_db`.`category` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `category_id` INT NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  `description` VARCHAR(50) NOT NULL,
  `discount_id` INT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_category_category1`
    FOREIGN KEY (`category_id`)
    REFERENCES `etrade_db`.`category_discount` (`id`));

CREATE TABLE IF NOT EXISTS `etrade_db`.`product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `description` VARCHAR(50) NOT NULL,
  `category_id` INT NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_category_id`
    FOREIGN KEY (`category_id`)
    REFERENCES `etrade_db`.`category` (`id`));
   
CREATE TABLE IF NOT EXISTS `etrade_db`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NULL DEFAULT NULL,
  `password_hash` VARCHAR(50) NOT NULL,
  `first_name` VARCHAR(45) NULL DEFAULT NULL,
  `last_name` DECIMAL(10,2) NULL DEFAULT NULL,
  `phone_number` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`));
   
CREATE TABLE IF NOT EXISTS `etrade_db`.`order` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `date_placed` DATETIME NULL DEFAULT NULL,
  `total_price` INT NOT NULL,
  `total_quantity` INT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_userid_order`
    FOREIGN KEY (`user_id`)
    REFERENCES `etrade_db`.`user` (`id`));
    
CREATE TABLE IF NOT EXISTS `etrade_db`.`order_item` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `order_id` INT NULL,
  `product_id` INT NOT NULL,
  `product_quantity` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_product_id`
    FOREIGN KEY (`product_id`)
    REFERENCES `etrade_db`.`product` (`id`),
  CONSTRAINT `fk_order_id2`
    FOREIGN KEY (`order_id`)
    REFERENCES `etrade_db`.`order` (`id`));
    
CREATE TABLE IF NOT EXISTS `etrade_db`.`address` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `address_line1` VARCHAR(45) NULL DEFAULT NULL,
  `address_line2` VARCHAR(45) NULL DEFAULT NULL,
  `city` VARCHAR(45) NULL DEFAULT NULL,
  `postal_code` VARCHAR(45) NULL DEFAULT NULL,
  `mobile` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `etrade_db`.`user` (`id`));
    
CREATE TABLE IF NOT EXISTS `etrade_db`.`cart` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `total_quantity` INT NOT NULL,
  `total_price` DECIMAL(10,2) NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_cart_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `etrade_db`.`user` (`id`));
    
CREATE TABLE IF NOT EXISTS `etrade_db`.`product_cart` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `product_id` INT NULL DEFAULT NULL,
  `cart_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `prd_fk1`
    FOREIGN KEY (`product_id`)
    REFERENCES `etrade_db`.`product` (`id`),
  CONSTRAINT `crt_fk1`
    FOREIGN KEY (`cart_id`)
    REFERENCES `etrade_db`.`cart` (`id`));

    