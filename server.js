import express from "express";

const app = express();
app.use(express.json());

// Test API routing
app.get("/", (req, res) => {
  res.status(200).send("test sever runing...");
});

// Handling Errors
// Express5 is in beta stage. it has a middleware that handle http error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke the sever!");
});

// Listening
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is runing on port ${port}`);
});
