const { handleAddUser } = require("../services/user");

// Add new scrap function ->
const AddUser = async (req, res) => {
  const { name, phone, city } = req.body;
  try {
    const userId = await handleAddUser(name, phone, city);
    res.status(201).json({ userId });
  } catch (e) {
    res.status(500).json({ error: e });
  }
};

module.exports = { AddUser };
