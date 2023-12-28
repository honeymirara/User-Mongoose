# Express Server for User Management

## Overview

This Express server facilitates CRUD operations on users and their associated skills, connecting to MongoDB using Mongoose.

## Getting Started

```bash
git clone <repository_url>
cd <project_directory>
npm install
Create a .env file in the project root and add:

env
Copy code
MONGODB_URI=<your_mongodb_uri>
Start the server:

bash
Copy code
npm start
API Endpoints
Users
Create User: POST /users
Get All Users: GET /users
Get User by ID: GET /users/:id
Update User by ID: PUT /users/:id
Delete User by ID: DELETE /users/:id
Skills
Add Skills to User: POST /users/:userId/skills
Get All Skills for User: GET /users/:userId/skills
Get Skill by ID for User: GET /users/:userId/skills/:skillId
Update Skill by ID for User: PUT /users/:userId/skills/:skillId
Delete Skill by ID for User: DELETE /users/:userId/skills/:skillId
Dependencies
Express.js
Mongoose
dotenv
Environment Variables
MONGODB_URI: MongoDB connection URI
Contributing
Feel free to contribute by opening issues or submitting pull requests.

License
This project is licensed under the MIT License.
