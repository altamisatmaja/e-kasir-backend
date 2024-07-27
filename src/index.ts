import express, { Request, Response } from "express";

import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req: Request, res: Response) => {
    return res.status(200).send({
        response: process.env.API_NAME
    });
});

app.listen(process.env.API_PORT, () => {
    console.log(`API running on port: ${process.env.API_PORT}`);
});