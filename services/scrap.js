const e = require("express");
const pool = require("./db");
// Add new scrap function ->
const { sendMessage } = require("./message");
async function handleAddScrap(scrap) {
  try {
    let result;
    try {
      result = await pool.query(
        "INSERT INTO scrap (name, phone, city, scrapType, scrapWeight, location, pricePerKg) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [
          scrap.name,
          scrap.phone,
          scrap.city,
          scrap.scrapType,
          scrap.scrapWeight,
          scrap.location,
          scrap.pricePerKg,
        ]
      );
    } catch (error) {
      throw new Error("Failed to add scrap to database");
    }

    const [usersInSameLocation] = await pool.query(
      "SELECT phone FROM users WHERE city = ?",
      [scrap.city]
    );

    if (usersInSameLocation.length > 0) {
      const contentVariables = {
        1: scrap.scrapWeight,
        2: scrap.location,
        3: scrap.pricePerKg,
        4: scrap.scrapType,
        5: scrap.name,
        6: scrap.phone,
      };
      const messageTemplate = `Weight: ${contentVariables[1]}, Location: ${contentVariables[2]}, Price per Kg: ${contentVariables[3]}, Type: ${contentVariables[4]}, Name: ${contentVariables[5]}, Phone: ${contentVariables[6]}`;

      const sendMessagesPromises = usersInSameLocation.map((user) =>
        sendMessage(messageTemplate, user.phone).catch((error) => {
          throw error;
        })
      );
      await Promise.all(sendMessagesPromises);
    } else {
      console.log("No users found in the same location to send messages.");
    }

    return {
      success: true,
      message: "Scrap added and messages sent successfully",
      result,
    };
  } catch (e) {
    console.error("Error adding scrap or sending message:", e);
    return {
      success: false,
      message: "Failed to add scrap or send message",
      error: e.message,
    };
  }
}

// Get all scraps function ->
async function handleGetScraps(location) {
  try {
    const [result] = await pool.query(
      "SELECT * FROM scrap WHERE location = ?",
      [location]
    );
    return result;
  } catch (e) {
    return e;
  }
}

// remove scrap function by id->
const handleRemoveScrap = async (id) => {
  try {
    const [result] = await pool.query("DELETE FROM scrap WHERE id = ?", [id]);
    return result;
  } catch (e) {
    return e;
  }
};

module.exports = { handleAddScrap, handleGetScraps, handleRemoveScrap };
