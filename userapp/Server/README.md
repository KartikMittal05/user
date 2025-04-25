# User Management API

A RESTful API for user management built with Node.js, Express, and MongoDB.

## Deployment Instructions for Render

1. Create a GitHub repository and push your code:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. Create a new Web Service on Render:

   - Go to [render.com](https://render.com)
   - Sign up or log in
   - Click "New +" and select "Web Service"
   - Connect your GitHub repository
   - Choose the repository and branch

3. Configure the Web Service:

   - Name: user-management-api (or your preferred name)
   - Environment: Node
   - Build Command: `npm install`
   - Start Command: `npm start`

4. Add Environment Variables:

   - MONGODB_URI: Your MongoDB connection string
   - NODE_ENV: production
   - PORT: 3000

5. Click "Create Web Service"

## API Endpoints

- GET `/users` - Get all users
- GET `/user/:email` - Get user by email
- POST `/createuser` - Create new user
- PUT `/edituser/:email` - Update user
- DELETE `/deleteuser/:email` - Delete user

## Environment Variables

- `PORT`: Server port (default: 3000)
- `MONGODB_URI`: MongoDB connection string

## Local Development

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file with required environment variables

3. Run the server:
   ```bash
   npm run dev
   ```

## Frontend Integration

Update the API base URL in your frontend application to point to your Render deployment URL:

```javascript
const API_BASE_URL = "https://your-render-service-url.onrender.com";
```
