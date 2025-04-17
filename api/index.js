import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'; // This is your router
import authRouter from './routes/auth.route.js'; // This is your router
dotenv.config();

const app = express();

// Optional: Middleware for parsing JSON
app.use(express.json());

mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('MongoDB connected!');
  })
  .catch((err) => {
    console.log('MongoDB connection error:', err);
  });

app.use('/api/user', userRouter); // ✅ use the correct imported router name

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});

app.use('/api/user', userRouter); // Use the imported router
app.use('/api/auth', authRouter); // Use the imported 
//app.get('/test', (req, res) => {
  //res.json(
    //{
      //message:'Hello World!',
//});
//}
//);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

