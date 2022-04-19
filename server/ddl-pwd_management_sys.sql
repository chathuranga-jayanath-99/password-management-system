create database if not EXISTS pwd_management_sys;
use pwd_management_sys;

drop table if EXISTS users;
create table if not EXISTS users (
    id int unsigned AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(1024) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    gender VARCHAR(8) NOT NULL
);

INSERT INTO users (name, password, email, gender)
VALUES (
    'Chaturanga Jayanath',
    '$2b$10$T98uZ8xm/c7GACggl/w5Re3KwBTwISbpBYYG1p9MyXi1A6njuc9ka',
    'chathuranga@gmail.com',
    'male'
  );

INSERT INTO users (name, password, email, gender)
VALUES (
    'Saneth Gamage',
    '$2b$10$T98uZ8xm/c7GACggl/w5Re3KwBTwISbpBYYG1p9MyXi1A6njuc9ka',
    'saneth@gmail.com',
    'male'
  );
