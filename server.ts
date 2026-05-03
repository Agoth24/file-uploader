import "dotenv/config" // CRITICAL
import express from "express";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";

const app = express();
const PORT = process.env.PORT || 3000;



app.all("/api/auth/{*any}", toNodeHandler(auth));
app.use(express.json())






app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
	console.log(`Process ID: ${process.pid}`);
});
