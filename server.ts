import "dotenv/config" // CRITICAL
import express from "express";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import { fileRouter } from "./routes/fileRouter";
import { folderRouter } from "./routes/folderRouter";
import { userRouter } from "./routes/userRouter";

const app = express();
const PORT = process.env.PORT || 3000;

app.all("/api/auth/{*any}", toNodeHandler(auth));
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/users", userRouter)
app.use("/files", fileRouter)
app.use("/folders", folderRouter)


app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
	console.log(`Process ID: ${process.pid}`);
});
