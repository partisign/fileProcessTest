import express from "express";
import { configDotenv } from "dotenv";
configDotenv();
const PORT = process.env.PORT || 5000;
const app = express();
app.listen(PORT, () => { console.log(`we a sterted at ${PORT}`) });