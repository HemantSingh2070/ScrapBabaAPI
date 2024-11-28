CREATE DATABASE scrapBaba;
USE scrapBaba;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    city VARCHAR(50) NOT NULL
);
CREATE TABLE scrap (
    id INT AUTO_INCREMENT PRIMARY KEY, -- Unique identifier for each entry
    name VARCHAR(100) NOT NULL,        -- Name of the person or entity
    phone VARCHAR(15) NOT NULL,        -- Phone number
    city VARCHAR(100) NOT NULL,        -- City
    scrapType VARCHAR(100) NOT NULL,   -- Type of scrap (e.g., metal, paper, etc.)
    scrapWeight DECIMAL(10,2) NOT NULL, -- Weight of scrap in kilograms
    location TEXT NOT NULL,            -- Detailed location
    pricePerKg DECIMAL(10,2) NOT NULL  -- Price per kilogram
);
