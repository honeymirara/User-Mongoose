# User-Mongoose
# Express Server for User Management

## Overview

This Express server facilitates CRUD operations on users and their associated skills, connecting to MongoDB using Mongoose.

## Getting Started

1. Clone the repository:

   ```bash
   git clone <repository_url>
Install dependencies:

bash
Copy code
cd <project_directory>
npm install

2. Set up your MongoDB connection:

Create a .env file in the root of your project.

Add the following line to the .env file, replacing <your_mongodb_uri> with your MongoDB URI:

env
Copy code
MONGODB_URI=<your_mongodb_uri>

3. Start the server:

bash
Copy code
npm start
API Endpoints
Users
Create User

POST /user
Get All Users

GET /user
Get User by ID

GET /user/:id
Update User by ID

PUT /user/:id
Delete User by ID

DELETE /user/:id
Skills
Add Skills to User

Dependencies
Express.js
Mongoose

Environment Variables
MONGODB_URI: MongoDB connection URI
Contributing
Feel free to contribute by opening issues or submitting pull requests.

License
This project is licensed under the MIT License.
