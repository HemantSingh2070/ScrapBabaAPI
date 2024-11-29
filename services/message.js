const twilio = require("twilio");

const accountSid = process.env.TWILIO_ACCOUNT_SID; // Ensure this is set in your environment variables
const authToken = process.env.TWILIO_AUTH_TOKEN; // Secure this value using environment variables
const client = twilio(accountSid, authToken);

const sendMessage = async (messageBody, toPhoneNumber) => {
  try {
    const message = await client.messages.create({
      body: messageBody,
      from: "+17753207061",
      to: toPhoneNumber,
    });
    return message.sid;
  } catch (error) {
    console.error("Error sending SMS:", error);
    throw error;
  }
};

module.exports = { sendMessage };
