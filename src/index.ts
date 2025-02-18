import express from "express";
import cors from 'cors';
import { configDotenv } from "dotenv";
import bodyParser from "body-parser";
import router from "./routes";
configDotenv();
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(router);
app.listen(PORT, () => { console.log(`we a sterted at ${PORT}`) });