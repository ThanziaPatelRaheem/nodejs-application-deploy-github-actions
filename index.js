import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from server! Backend is running");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running at ${PORT}`);
});
