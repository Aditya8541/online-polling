import express from 'express'
import http from 'http'
import { Server as SocketIOServer } from 'socket.io'
import cors from "cors"
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import authRoutes from './routes/authRoutes.js'
import pollRoutes from './routes/pollRoutes.js'
import voteRoutes from './routes/voteRoutes.js'
import resultsRoutes from './routes/resultsRoutes.js'
import adminRoutes from './routes/adminRoutes.js'
import { errorHandler } from './middleware/errorHandler.js'
import helmet from "helmet";
import rateLimit from "express-rate-limit";

// load env
dotenv.config();

const app = express();


// ✅ CORS MUST BE FIRST
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));


// ✅ extra safety (fix stubborn CORS issues)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});


// ✅ other middlewares
app.use(express.json());
app.use(helmet());

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 100,
  message: "Too many requests. Try again later."
});
app.use(limiter);


// ✅ routes
app.use('/api/auth', authRoutes);
app.use("/api/poll", pollRoutes);
app.use("/api/votes", voteRoutes);
app.use("/api/results", resultsRoutes);
app.use("/api/admin", adminRoutes);
app.use(errorHandler);


// test route
app.get("/", (req, res) => {
  res.send("Backend makkhan chal rha hai 👍👍👍");
});


// DB connection
connectDB();


// server
const server = http.createServer(app);


// socket.io
const ioInstance = new SocketIOServer(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

ioInstance.on("connection", (socket) => {
  console.log("User Connected: ", socket.id);

  socket.on("joinTest", (data) => {
    socket.emit("Server Message", "Hello bro ❤️");
  });

  socket.on("joinPoll", (pollId) => {
    socket.join(pollId);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected: ", socket.id);
  });
});

export const io = ioInstance;


const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log("Server makkhan ki tarah chal rha hai🏃‍♂️🏃‍♂️🏃‍♂️");
});