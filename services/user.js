require("dotenv").config();
const pool = require("./db");
// Add new user function ->
async function handleAddUser(name, phone, city) {
  try {
    const [result] = await pool.query(
      "INSERT INTO users (name, phone, city) VALUES (?, ?, ?)",
      [name, phone, city]
    );
    return result.insertId;
  } catch (e) {
    return e;
  }
}

module.exports = { handleAddUser };
