import express from "express";
const processId = process.pid;

const app = express();

app.get("/", (request, response) => {
  for (let index=0; index < 1e7; index ++);
  return response.end(`handle by pid: ${processId} \n`);
})


app.listen(3001, () => {
  console.log(`Server is running at 3001 with processID: ${processId}`);
})


// kill
process.on("SIGTERM", () => {
    console.log("Server ending", new Date().toISOString());
    process.exit();
})


//  setTimeout(() => {
//    process.exit(1)
//  }, Math.random() * 1e4);