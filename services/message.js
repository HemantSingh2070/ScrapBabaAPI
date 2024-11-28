const twilio = require("twilio");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = "7fadd660fe778ad2a0aa04176c501d39";
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
