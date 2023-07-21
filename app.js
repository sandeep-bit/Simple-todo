const express = require("express");
const connectToDatabase = require("./dbConnect");
const cors = require("cors");
const app = express();
const todoRoute = require("./routes/todo");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/todo", todoRoute);
connectToDatabase(
  "mongodb+srv://bashyalsandeep222:Node123@practise.tjyzj1m.mongodb.net/"
)
  .then(() => {
    app.listen(8000, () => {
      console.log("Listening on port 8000");
    });
  })
  .catch(err => {
    console.log(err);
  });
