const express = require("express");
const app = express();
const port = 4000;

const accounts = require("./db/accounts");

app.get("/accounts", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send(JSON.stringify(accounts));
});

app.get("/accounts/:id", (req, res) => {
  const accountID = req.params.id;

  const account = accounts.find((el) => el.id == accountID);
  if (account) {
    res.header("Access-Control-Allow-Origin", "*");
    res.send(JSON.stringify([account]));
  }
  return res.status(404).send({
    message: "Account not found",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
