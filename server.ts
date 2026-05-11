import "dotenv/config" // CRITICAL
import express from "express";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import { fileRouter } from "./routes/fileRouter";
import { folderRouter } from "./routes/folderRouter";
import { userRouter } from "./routes/userRouter";
import { errorHandler } from "./middleware/errorsHandler";
import { requireAuth } from "./middleware/requireAuth";

const app = express();
const PORT = process.env.PORT || 3000;

app.all("/api/auth/{*any}", toNodeHandler(auth));
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/users", requireAuth, userRouter)
app.use("/files", requireAuth, fileRouter)
app.use("/folders", requireAuth, folderRouter)

app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
	console.log(`Process ID: ${process.pid}`);
});
