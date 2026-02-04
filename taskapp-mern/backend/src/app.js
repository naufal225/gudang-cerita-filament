import dotenv from "dotenv";
dotenv.config();

import express from "express";
import router from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dns from "node:dns/promises";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const app = express();
const PORT = process.env.PORT || 5001;

await connectDB();

app.use(
  cors({
    origin: [
      "http://localhost:5174",
      "http://localhost:5173"
    ],
  }),
);

app.use(express.json());

app.use(rateLimiter);

app.use("/api/notes", router);

app.listen(PORT, () => {
  console.log("Aplikasi berjalan di PORT", PORT);
});
