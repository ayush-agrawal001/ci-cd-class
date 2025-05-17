import { WebSocketServer, WebSocket } from "ws";
import { prisma } from "@repo/db/client";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", async (ws : WebSocket) => {
    ws.on("message", async (message : any) => {
        console.log(message.toString());
        ws.send("Hello from server");
        const user = await prisma.user.create({
            data: {
                email: "test@test.com",
                name: "Test User",
            },
        });
        console.log(user);
        ws.send(JSON.stringify(user));
    });
});

console.log("Server is running on port 8080");
