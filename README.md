# The I Word

## Description

The I Word is a blog website made for the user to post and express themselves without worry, like a virtual diary on the go that you can share with your friends or other users. As a user you can choose a nickname as your profile and post a diary that only you can see.

## Table of Contents

- Features
- Technologies
- Project Structure
- Testing

## Features

* User registration and login with JWT authentication
* Create, update, delete blog posts
* Secure routes for users
* View all posts and individual post details
* Responsive design with Raect for frontend
* File uploads for blog posts

## Technologies

### Backend

* Node.js
* Express.js
* MonogoDB & Mongoose
* JWT Authentication
* Bcyrpt for password hashing

### Frontend
* React.js
* Axios for API requests
* React Router for navigation

## Project Structure

```bash
i_word/

backend/
src/
config/
controllers/
models/
routes/
middleware/
server.js
.env
frontend/
public/
src/
components/
pages/
services/
context/
```

## Testing

To run the backend tests:
* run the test:
npm test

