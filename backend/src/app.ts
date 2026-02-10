import express, { Application } from "express";
import { IndexRoutes } from "./app/routes";
import { notFound } from "./app/middleware/notFound";
import { globalErrorHandler } from "./app/middleware/globalErroHandler";

const app: Application = express();


// Enable URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());

app.use("/api/v1", IndexRoutes);
// Basic route for testing
app.get("/", (req, res) => {
    res.send("Welcome to HealthX BACKEND!");
});

app.use(globalErrorHandler)
app.use(notFound)

export default app;