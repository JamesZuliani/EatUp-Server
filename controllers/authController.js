const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const knex = require("knex");

const secretKey = "asecretkeyhere";

const knexConfig = require("../knexfile");
const db = knex(knexConfig);

module.exports.login = async (req, res) => {
  const { username, password } = req.body;

  const user = await db("user").where({ username }).first();
  if (!user) {
    return res.status(401).json({ error: "Not authenticated" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ error: "Not authenticated" });
  }

  const token = jwt.sign({ sub: user.id }, secretKey, { expiresIn: "48h" });


  return res.json({ userId: user.id, token });
};

module.exports.signup = async (req, res) => {
  const { username, password } = req.body;

  const existing = await db("user").where({ username }).first();
  if (existing) {
    return res.status(409).json({ error: "user already exists" });
  }

  const hashed = await bcrypt.hash(password, 10);

  [userId] = await db("user").insert({ username, password: hashed });

  const token = jwt.sign({ sub: userId }, secretKey, { expiresIn: "48h" });


  return res.json({ userId: userId, token });
};
