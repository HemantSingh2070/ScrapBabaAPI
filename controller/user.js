const { handleAddUser } = require("../services/user");

// Add new scrap function ->
const AddUser = async (req, res) => {
  const { name, phone, city } = req.body;
  try {
    const userId = await handleAddUser(name, phone, city);
    res.status(201).send({ userId });
  } catch (e) {
    res.status(500).send({ error: e });
  }
};

module.exports = { AddUser };
