import { io } from "socket.io-client";
const socket = io("http://localhost:3000");
io.on("chat-message", (data) => {
    console.log(data);
});
