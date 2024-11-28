const twilio = require("twilio");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

const sendMessage = async (messageBody, toPhoneNumber) => {
  try {
    const message = await client.messages.create({
      from: "whatsapp:+14155238886",
      body: messageBody,
      to: `whatsapp:${toPhoneNumber}`,
    });
    return message.sid;
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};

module.exports = { sendMessage };
