-- Database schema for storing user progress
CREATE TABLE user_progress (
    id SERIAL PRIMARY KEY,
    username TEXT UNIQUE,
    current_level INTEGER
);
