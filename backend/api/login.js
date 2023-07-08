const express = require("express");
const router = express.Router();
const { MongoClient } = require("mongodb");
require("dotenv").config();

const client = new MongoClient(process.env.DB_ADD);

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  try {
    console.log(username, password);
    await client.connect();
    const db = client.db("MiniProjectDBMS");
    const result = await db.collection("AccountData").findOne({ username });

    // console.log(result);
    if (result.password === password) {
      res.json({ status: true, msg: "Login Successful" });
    } else {
      res.json({ status: false, msg: "Login Failed" });
    }
  } catch (err) {
    console.log(err);
    res.status(500);
  }
  // if (username === process.env.USER && password === process.env.PASSWORD) {
  //    res.json({ status: true, msg: "Login Successful" })
  // }
  // else {
  //    res.json({ status: false, msg: "Login Failed" })
  // }
});

module.exports = router;
