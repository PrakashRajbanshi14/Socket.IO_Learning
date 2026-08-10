const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer();

const io = new Server(server, {
  cors: {
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
  }
});

io.on("connection", (socket) => {
    console.log("A user connected");
    console.log("Socket ID:", socket.id);
    
    // Listens for the client's "hello" event
    socket.on("hello", (name) => {
        console.log(`Hello event received from client ${name}!`);
    });
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
