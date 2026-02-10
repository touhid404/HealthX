import express, { Application } from "express";
import { IndexRoutes } from "./app/routes";

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

export default app;