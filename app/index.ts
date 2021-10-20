import express, { Request, Response } from 'express';

const app = express();

app.use(express.json())
app.get("/", (_: Request, res: Response) => res.json({ message: 'ok' }))

app.listen(4000, () => console.log("server running"))
