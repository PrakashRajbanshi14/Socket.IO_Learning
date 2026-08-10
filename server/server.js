const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer();

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    console.log("A user connected");

    console.log("Socket ID:", socket.id);
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});