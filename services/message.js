const twilio = require("twilio");

const accountSid = process.env.TWILIO_ACCOUNT_SID; // Ensure this is set in your environment variables
const authToken = "7fadd660fe778ad2a0aa04176c501d39"; // Secure this value using environment variables
const client = twilio(accountSid, authToken);

const sendMessage = async (messageBody, toPhoneNumber) => {
  try {
    const message = await client.messages.create({
      from: "+12294595643",
      body: messageBody,
      to: toPhoneNumber,
    });
    return message.sid;
  } catch (error) {
    console.error("Error sending SMS:", error);
    throw error;
  }
};

module.exports = { sendMessage };
