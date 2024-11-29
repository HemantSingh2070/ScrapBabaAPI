const e = require("express");
const pool = require("./db");
const { sendMessage } = require("./message");
// Add new scrap function ->
async function handleAddScrap(scrap) {
  try {
    // Insert scrap into the database
    const result = await pool.query(
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

    // Query users in the same city
    const [usersInSameLocation] = await pool.query(
      "SELECT phone FROM users WHERE city = ?",
      [scrap.city]
    );

    if (usersInSameLocation.length > 0) {
      // Prepare the message content
      const contentVariables = {
        1: scrap.scrapWeight,
        2: scrap.location,
        3: scrap.pricePerKg,
        4: scrap.scrapType,
        5: scrap.name,
        6: scrap.phone,
      };
      const messageTemplate = `Weight: ${contentVariables[1]}, Location: ${contentVariables[2]}, Price per Kg: ${contentVariables[3]}, Type: ${contentVariables[4]}, Name: ${contentVariables[5]}, Phone: ${contentVariables[6]}`;

      // Send messages to users
      const sendMessagesResults = await Promise.allSettled(
        usersInSameLocation.map((user) =>
          sendMessage(messageTemplate, user.phone)
        )
      );

      // Log results of message sending
      sendMessagesResults.forEach((result, index) => {
        if (result.status === "fulfilled") {
          console.log(
            `Message sent successfully to ${usersInSameLocation[index].phone}`
          );
        } else {
          console.error(
            `Failed to send message to ${usersInSameLocation[index].phone}:`,
            result.reason
          );
        }
      });
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
