import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/posts.js";
const app = express();
const CONNECTION_URL =
  "mongodb+srv://ankitkumar12112:ankitkumar12112@cluster0.rqvrw.mongodb.net/test";
const PORT = process.env.PORT || 5000;
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port:${PORT}`))
  )
  .catch((error) => console.log(error));
app.get("/", (req, res) => {
  res.send("hello world!!!");
});

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", router);
// const CONNECTION_URL ="mongodb+srv://ankitkumar12112:ankitkumar12112@cluster0.rqvrw.mongodb.net/test";
// const PORT = process.env.PORT||5000;
// //app.listen(PORT, () => console.log(`server running on port:${PORT}`))
// mongoose.connect(CONNECTION_URL,{ useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() =>
//     app.listen(PORT, () => console.log(`server running on port:${PORT}`))
//   ) .catch((error) => console.log(error));
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

mongoose.set("useFindAndModify", false);
