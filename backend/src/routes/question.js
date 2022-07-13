const express  = require("express");
const Question = require("../models/question");


const app = express();

app.get("/questions", async ({ body }, res) => (
  res.status(200).json(
    (await Question.find({
      ...(body?.theme && { theme: body.theme })
    })).sort(() => (Math.random() > 0.5) ? 1 : -1)
  )
));

app.post("/questions/$id", async ({ body }, res) => {
  const question = await Question.find({ _id: body?.id });
  return res.status((!question || question.anwser.epur() !== body.answer.epur()) ? 400 : 200);
});

module.exports = app;