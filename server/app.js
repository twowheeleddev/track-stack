import express from "express";
import cors from "cors";
import directoryRoute from "./routes/directoryRoute.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", directoryRoute);

export default app;
