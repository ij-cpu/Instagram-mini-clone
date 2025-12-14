import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import postRoute from "./routes/post.route.js";
import messageRoute from "./routes/message.route.js";
import { app, server } from "./socket/socket.js";
import path from "path";

dotenv.config({ path: "./utils/.env" });

const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: process.env.URL,
    credentials: true
}));

// API routes (VERY IMPORTANT: APIs FIRST)
app.use("/api/v1/user", userRoute);
app.use("/api/v1/post", postRoute);
app.use("/api/v1/message", messageRoute);

// frontend static
app.use(express.static(path.join(__dirname, "frontend/dist")));

// ✅ SAFE FALLBACK (NO WILDCARD STRING)
app.use((req, res) => {
    res.sendFile(
        path.resolve(__dirname, "frontend", "dist", "index.html")
    );
});

server.listen(PORT, () => {
    connectDB();
    console.log(`Server running on port ${PORT}`);
});
