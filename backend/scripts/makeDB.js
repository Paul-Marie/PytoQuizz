const { connection } = require("mongoose");
const { readFile   } = require("fs/promises");
const Question       = require("../src/models/question");


// CAUTION: This will drop all pytoquiz's database and recreate it
module.exports = async () => {
  console.log("Clearing database...");
  await connection.dropDatabase();
  console.log("> Creating Questions database...");
  const buff = await readFile("../questions.json");
  const data = JSON.parse(buff);
  await Promise.all(data?.map(async ({ text, image, answer, theme }) => (
    await Question.create({ text, image, answer, theme })
  )));
  console.log(`${data?.length ?? 0} questions were successfully created`);
  console.log("All done, have a nice day!");
  process.exit(0);
};
