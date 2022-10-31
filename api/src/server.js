import http from "http";
const processId = process.pid;

const server = http.createServer((request, response) => {
    for (let index=0; index < 1e7; index ++);
    return response.end(`handle by pid: ${processId} \n`);
});

server
  .listen(3000)
  .once("listening", () =>
    console.log(`Server started in process ${processId}`)
  );


process.on("SIGTERM", () => {
    console.log("Server ending", new Date().toISOString());
    server.close(() => process.exit());
});