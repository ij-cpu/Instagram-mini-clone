Instagram Mini Clone (MERN Stack)

This project is a mini clone of Instagram built using the MERN stack. It provides core social media features such as user authentication, creating posts, viewing feeds, and real-time messaging.

--------------------------------------------------

Features

User Authentication
- User signup and login
- JWT based authentication
- Secure cookies

Posts
- Create posts with images
- Like and comment on posts
- View all posts in a feed

Messaging
- One-to-one real-time chat
- Implemented using Socket.IO

User Management
- View user profiles
- Follow and unfollow users
- Suggested users list

Frontend
- Built using React and Vite
- Responsive user interface
- Styled with Tailwind CSS

--------------------------------------------------

Tech Stack

Frontend
- React
- Vite
- Tailwind CSS
- Axios
- React Router

Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token
- bcryptjs
- Socket.IO

--------------------------------------------------

Project Structure

Instagram-mini-clone/

backend/
- controllers
- middlewares
- models
- routes
- socket
- utils
- index.js
- package.json

frontend/
- public
- src
- index.html
- vite.config.js
- package.json

.gitignore
README.md

--------------------------------------------------

Installation and Setup

Step 1: Clone the repository

git clone https://github.com/ij-cpu/Instagram-mini-clone.git
cd Instagram-mini-clone

--------------------------------------------------

Step 2: Backend Setup

cd backend
npm install

Create a .env file inside backend/utils directory and add:

PORT=3000  
MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_secret_key  
URL=http://localhost:5173  

Run the backend server:

npm run dev

--------------------------------------------------

Step 3: Frontend Setup

cd frontend
npm install
npm run dev

Note:
Node.js version 20 or above is required for running the frontend with Vite.

--------------------------------------------------

Running the Application

Frontend runs on:
http://localhost:5173

Backend runs on:
http://localhost:3000

--------------------------------------------------

Environment Variables

PORT  
Defines the backend server port

MONGO_URI  
MongoDB connection string

JWT_SECRET  
Secret key for JWT authentication

URL  
Frontend application URL

--------------------------------------------------

Author

Isha Joshi  
BTech Computer Science  
Frontend Developer and MERN Stack Learner

--------------------------------------------------
