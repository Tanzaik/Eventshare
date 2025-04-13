# Eventshare
TLDR; a social media web app that lets people post and share cool events.

EventShare is a full-stack social media web application that enables users to seamlessly sign in with Google, create, view, and share events in a community-oriented feed. Built with a modern and scalable MERN (MongoDB, Express, React, Node.js) stack and styled using Tailwind CSS, the app offers an intuitive, responsive user experience backed by secure authentication and robust backend logic.


⚙️ Technology Stack
🔒 Authentication
Google OAuth 2.0 via passport-google-oauth20

JWT (JSON Web Token) for stateless session handling

Passport.js as the authentication middleware

Protected routes to ensure only authenticated users can perform certain actions


🧠 Backend
Node.js with Express for the RESTful API server

MongoDB for storing users and events, with Mongoose for schema modeling

Environment configuration using dotenv

User and Event models with relationships between creators and events


🖥️ Frontend
React.js as the frontend framework

Redux Toolkit for global state management (auth state and event state)

React Router DOM for client-side routing

Axios for HTTP requests between the frontend and backend

Tailwind CSS for responsive, utility-first styling


🔐 Google OAuth + JWT Authentication Flow
We began by integrating Google Sign-In using Passport's Google Strategy. When a user visits /auth/google, they are redirected to Google's login screen. Upon successful login:

The user is redirected back to our server’s callback route.

We check if the user exists in MongoDB (via Google ID); if not, we create a new user.

A JWT is generated using the user's MongoDB ID.

The token is passed to the frontend via query parameter (/auth/success?token=...).

On the frontend, the app uses this token to fetch the user's data and stores both the token and user info in Redux.

This authentication is stateless (no session storage) and secure, providing a clean separation between frontend and backend authentication.


🧰 Backend API Development
We created a scalable and RESTful backend architecture with the following components:


👤 User Model
Stores user information returned from Google (name, email, avatar, Google ID)


📅 Event Model
Each event includes title, description, date, location, creator (linked via ObjectId), and creation timestamp.


🔐 JWT Middleware
A custom auth middleware was added to:

Validate JWTs on protected routes (event creation, deletion)

Attach the corresponding user to the request object for use in controllers

📡 Event Routes
POST /api/events — Create a new event (requires JWT)

GET /api/events — Public endpoint to list all events

GET /api/events/me — Lists all events created by the current user

DELETE /api/events/:id — Deletes a specific event if the requester is its creator

Each route uses proper error handling and secure access control.


💻 Frontend Architecture
🧭 React + Redux Setup
We bootstrapped the frontend with create-react-app, installed required dependencies, and set up a robust Redux store with slices for:

auth: stores token and user info

events: stores list of events and loading state

Each slice uses createAsyncThunk to handle async actions like fetching events.


🧠 Auth Success Handling
Upon redirection to /auth/success, the frontend:

Extracts the token from the URL

Sends it to /api/users/me to fetch user details

Stores the token and user in Redux

Redirects the user to /events (the feed)


📰 Event Feed Page
Displays all events fetched from the backend in a card-style layout with:

Event title, description, time, location

Creator’s name and avatar

Clean, spaced design using Tailwind CSS


➕ Create Event Page
An authenticated-only form that:

Collects title, description, date/time, and location

Sends a POST request with the JWT in headers

Redirects to the event feed after successful creation


🧭 Navigation Bar
A responsive navigation bar showing:

Links to "Event Feed" and "Create Event"

User's name and avatar when logged in

Google Sign-In button if logged out

Logout button that clears Redux state


🎨 Tailwind CSS Styling
We used Tailwind CSS to provide a professional and responsive design across all pages. Highlights include:

Clean form layouts with spacing and hover effects

Responsive cards for event display

Aesthetic color use for user actions (e.g., login/logout)

Typography enhancements for accessibility and readability

🌐 Conclusion
In just a few focused sessions, we architected and implemented a real-world, production-ready full-stack social event app with modern web technologies. From secure authentication to responsive UI and robust backend logic, EventShare represents an industry-standard example of a user-centered web application.
