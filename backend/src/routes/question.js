const express  = require("express");
const Question = require("../models/question");

const app = express();

app.get("/themes", async (_, res) => (
  res.status(200).json([
    ...new Set((
      await Question.find({}, { theme: 1 }))?.map(
        ({ theme }) => theme)?.filter(_ => _)
    )
  ])
));

app.get("/questions", async ({ query }, res) => (
  res.status(200).json(
    (await Question.find({
      ...(query?.theme && { theme: query.theme })
    })).sort(() => (Math.random() > 0.5) ? 1 : -1)
  )
));

app.post("/questions/:id", async ({ params, body }, res) => {
  const question = await Question.findOne({ _id: params?.id });
  return res.status((
    !question || question?.answer?.epur() !== body?.answer?.epur()
  ) ? 400 : 204).json();
});

module.exports = app;