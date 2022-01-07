const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const { showData, adduser } = require("./user");

app.get("/users", async (req, res) => {
  const list = await showData();
  res.json(list);
});
app.post("/add-user", async (req, res) => {
  const user = req.body;
  await adduser(user);
  res.json({ message: "recorded successfully" });
});
app.listen(6000, () => console.log("server started"));
