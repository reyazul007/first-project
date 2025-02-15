import express from 'express';
import dbConnect from './db';
import authRoutes from './routes/Auth';
import userRoutes from './routes/user';


const app = express();
const PORT = process.env.PORT || 5000;

// Connect to the database
dbConnect();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

// Signup function
async function signup(name, email, password) {
  const response = await fetch('http://localhost:5000/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  });
  const data = await response.json();
  if (response.ok) {
    localStorage.setItem('token', data.token);
    // Navigate to main page
    navigate("/login");
  } else {
    console.error(data.errors || data.msg);
  }
}

// Login function
async function login(email, password) {
  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });
  const data = await response.json();
  if (response.ok) {
    localStorage.setItem('token', data.token);
    // Navigate to main page
    navigate("/");
  } else {
    console.error(data.errors || data.msg);
  }
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
