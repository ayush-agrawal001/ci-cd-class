import express from "express";
import { prisma } from "@repo/db/client";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/users", async (req, res) => {
    const { email, name } = req.body;
    const user = await prisma.user.create({
        data: { email, name },
    });
    res.json(user);
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
