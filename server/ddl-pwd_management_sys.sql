create database if not EXISTS pwd_management_sys;
use pwd_management_sys;

drop table if EXISTS image;
drop table if EXISTS password;
drop table if EXISTS user;
create table if not EXISTS user (
    id int unsigned AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(1024) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    gender VARCHAR(8) NOT NULL
);

drop table if EXISTS admin;
create table if not EXISTS admin (
  id int unsigned AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(1024) NOT NULL,
  password VARCHAR(1024) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE
);

drop table if EXISTS password;
create table if not EXISTS password (
  id int unsigned AUTO_INCREMENT PRIMARY KEY,
  user_id int unsigned NOT NULL,
  title VARCHAR(255) NOT NULL,
  password VARCHAR(1024) NOT NULL,
  iv VARCHAR(255) NOT NULL,
  strength float,
  foreign key (user_id) 
    references user(id)
);

drop table if EXISTS image;
create table if not EXISTS image (
  id int unsigned AUTO_INCREMENT PRIMARY KEY,
  user_id int unsigned NOT NULL,
  title VARCHAR(255) NOT NULL,
  encrypted_image LONGTEXT NOT NULL,
  iv VARCHAR(255) NOT NULL,
  foreign key (user_id) 
    references user(id)
);

-- user table
INSERT INTO user (name, password, email, gender)
VALUES (
    'Chaturanga Jayanath',
    '$2b$10$T98uZ8xm/c7GACggl/w5Re3KwBTwISbpBYYG1p9MyXi1A6njuc9ka',
    'chathuranga@gmail.com',
    'male'
  );

INSERT INTO user (name, password, email, gender)
VALUES (
    'Saneth Gamage',
    '$2b$10$T98uZ8xm/c7GACggl/w5Re3KwBTwISbpBYYG1p9MyXi1A6njuc9ka',
    'saneth@gmail.com',
    'male'
  );

-- admin table
INSERT INTO admin (name, password, email)
VALUES (
    'Samath Gamlath',
    '$2b$10$T98uZ8xm/c7GACggl/w5Re3KwBTwISbpBYYG1p9MyXi1A6njuc9ka',
    'samath@gmail.com'
  );

INSERT INTO admin (name, password, email)
VALUES (
    'Ajith Kabral',
    '$2b$10$T98uZ8xm/c7GACggl/w5Re3KwBTwISbpBYYG1p9MyXi1A6njuc9ka',
    'ajith@gmail.com'
  );

-- password table
INSERT INTO password (user_id, title, password, iv, strength)
VALUES (
    '1',
    "facebook",
    "fa2ba0a6bb",
    "39d2c476bffeba5af38963b5cefa1638",
    0.5
);

INSERT INTO password (user_id, title, password, iv, strength)
VALUES (
    '2',
    "gmail",
    "fa2ba0a6bb",
    "39d2c476bffeba5af38963b5cefa1638",
    0.6
);
