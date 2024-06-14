const mongoose = require("mongoose");
const express = require("express");
//import player from "./src/data/player.js";
const app = express();
const bodyParser = require("body-parser");
const env = require("dotenv/config");
const path = require('path')

let top10Score = [];

app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.static("/"));
app.use(express.static(path.join(__dirname,'/')));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set('views', path.join(__dirname, 'views'));


mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@snake.qu72hiu.mongodb.net/snake`
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

const Player = mongoose
  .model(
    "player",
    new mongoose.Schema({
      name: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 17,
      },
      score: {
        type: Number,
        required: true,
        min: 0,
      },
    })
  )
app.get("/", async (req, res) => {
  top10Score = await Player.find().sort({ score: -1 }).limit(10);
  res.render('game', {top10Score: top10Score})
});
app.post("/submit", (req, res) => {
  res.status(204).end();
  let newPlayer = new Player({
    name: req.body.name,
    score: req.body.score,
    //score: 0,
  });
  newPlayer.save();
});
app.get("/leaderboard", async(req, res) => {
  top10Score = await Player.find().sort({ score: -1 }).limit(10);
  console.log(top10Score)
})

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 5000");
});
