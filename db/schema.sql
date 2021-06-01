DROP DATABASE IF EXISTS eTrade_db;
CREATE DATABASE eTrade_db;
USE  eTrade_db;

-- initial db tables design

-- User Table

CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(45) NULL,
  password_hash VARCHAR(50) NOT NULL,
  first_name VARCHAR(45) NULL,
  last_name DECIMAL(10,2) NULL,
  phone_number INT NULL,
  created_at DATETIME NULL DEFAULT NULL,
  modified_at DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE user_address (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    address_line1 VARCHAR(45) NULL,
    address_line2 VARCHAR(45) NULL,
    city VARCHAR(45) NULL,
    postal_code VARCHAR(45) NULL,
    country VARCHAR(45) NULL,
    telephone VARCHAR(45) NULL,
    mobile VARCHAR(45) NULL,
     PRIMARY KEY (id)
);

-- one user can have multiple addresses.

CREATE TABLE admin (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  password_hash VARCHAR(50) NOT NULL,
  first_name VARCHAR(45) NULL,
  last_name DECIMAL(10,2) NULL,
  phone_number INT NULL,
  permissions VARCHAR(50) NOT NULL,
  created_at DATETIME NULL DEFAULT NULL,
  modified_at DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE product_category (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  description VARCHAR(50) NOT NULL,
  created_at DATETIME NULL DEFAULT NULL,
  modified_at DATETIME NULL DEFAULT NULL,
  deleted_at DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (id)
) ;

CREATE TABLE product_discount (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  description VARCHAR(50) NOT NULL,
  discount_percent DECIMAL(10,2),
  active BOOLEAN,
  created_at DATETIME NULL DEFAULT NULL,
  modified_at DATETIME NULL DEFAULT NULL,
  deleted_at DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (id)
) ;
-- main product table

CREATE TABLE product (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  description VARCHAR(50) NOT NULL,
  SKU VARCHAR(45) NULL,
  category_id INT NOT NULL,
  price VARCHAR(50) NOT NULL,
  discount_id INT NOT NULL,
  created_at DATETIME NULL DEFAULT NULL,
  modified_at DATETIME NULL DEFAULT NULL,
  deleted_at DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- related tables 
-- cart

CREATE TABLE cart_item (
  id INT NOT NULL AUTO_INCREMENT,
  session_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL,
  created_at DATETIME NULL DEFAULT NULL,
  modified_at DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- shopping session id (session storage)

CREATE TABLE shopping_session (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  created_at DATETIME NULL DEFAULT NULL,
  modified_at DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- many orders for one user
-- user -> orders -> order_details for each order.

CREATE TABLE orders (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  order_id INT NOT NULL,
  date_placed DATETIME NULL DEFAULT NULL,
  amount INT NOT NULL,
  created_at DATETIME NULL DEFAULT NULL,
  modified_at DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE order_details (
  id INT NOT NULL AUTO_INCREMENT,
  quantity INT NOT NULL,
  total INT NOT NULL,
  product_id INT NOT NULL,
  created_at DATETIME NULL DEFAULT NULL,
  modified_at DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (id)
) ;

ALTER TABLE order_details ADD CONSTRAINT fk_product_id
    FOREIGN KEY (product_id) REFERENCES product(id);   
    
ALTER TABLE user_address ADD CONSTRAINT fk_user_id
    FOREIGN KEY (user_id) REFERENCES user(id);
    
ALTER TABLE product ADD CONSTRAINT fk_category_id
    FOREIGN KEY (category_id) REFERENCES product_category(id);
    
ALTER TABLE product ADD CONSTRAINT fk_product_discount 
    FOREIGN KEY (discount_id) REFERENCES product_discount(id);
    
ALTER TABLE shopping_session ADD CONSTRAINT fk_user_id2
    FOREIGN KEY (user_id) REFERENCES user(id);
    
ALTER TABLE cart_item ADD CONSTRAINT fk_session_id
    FOREIGN KEY (session_id) REFERENCES shopping_session(id);
    
ALTER TABLE cart_item ADD CONSTRAINT fk_product_id2
    FOREIGN KEY (product_id) REFERENCES product(id);
