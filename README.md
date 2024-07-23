Sclub Blog
Sclub is a full-featured blog platform built using the MERN stack (MongoDB, Express, React, Node.js). This README provides an overview of the project, including the software installed, team members, and detailed instructions on how the blog works.

Table of Contents
Introduction
Features
Installation
Usage
Team Members
Project Structure
API Endpoints
License

Introduction
Sclub is a modern, responsive blogging platform where users can register, log in, create posts, comment on posts, and interact with other users. The project leverages the MERN stack for a seamless full-stack JavaScript experience.

Features
User authentication (JWT-based)
Create, read, update, and delete (CRUD) posts
Comment on posts
User profiles
Responsive design
Real-time notifications
Error handling and validation
Deployed to production

Installation
Prerequisites
Before you begin, ensure you have the following software installed:

Node.js (v16 or later)
MongoDB (v4 or later)
Git
Backend Installation

Clone the repository:
git clone https://github.com/golphat1/mern-blog.git
cd sclub
Navigate to the server directory and install dependencies:

cd server
npm install

Create a .env file in the server directory with the following content:

env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Start the backend server:

npm start

Frontend Installation
Navigate to the client directory and install dependencies:

cd ../client
npm install

Create a .env file in the client directory with the following content:

env
REACT_APP_API_URL=http://localhost:5000/api

Start the frontend development server:
npm start

Usage
Open your browser and navigate to http://localhost:3000 to access the frontend.
Use http://localhost:5000/api to interact with the backend API.

Team Members
Alice Johnson - Project Manager
Bob Smith - Backend Developer
Carol Davis - Frontend Developer
David Brown - Full Stack Developer
Eve Wilson - UX/UI Designer

Project Structure
The project is divided into two main parts: the backend (server) and the frontend (client).

Backend (Server)
server.js - Main server file
config/ - Configuration files
controllers/ - Request handlers
models/ - Mongoose schemas
routes/ - API routes
middleware/ - Custom middleware functions
utils/ - Utility functions

Frontend (Client)
src/ - Main source directory
components/ - React components
pages/ - Page components
services/ - API service functions
context/ - Context API for state management
styles/ - CSS styles
App.js - Main app component
index.js - Entry point

API Endpoints
Auth Routes
POST /api/auth/register - Register a new user
POST /api/auth/login - Log in a user

User Routes
GET /api/users/:id - Get user profile
PUT /api/users/:id - Update user profile

Post Routes
GET /api/posts - Get all posts
POST /api/posts - Create a new post
GET /api/posts/:id - Get a single post
PUT /api/posts/:id - Update a post
DELETE /api/posts/:id - Delete a post

Comment Routes
POST /api/posts/:postId/comments - Add a comment to a post
GET /api/posts/:postId/comments - Get all comments for a post
DELETE /api/posts/:postId/comments/:commentId - Delete a comment

License
This project is licensed under the MIT License. See the LICENSE file for details.