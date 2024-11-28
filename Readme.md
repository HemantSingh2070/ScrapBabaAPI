# ScrapBabaAPI

ScrapBabaAPI is a backend service for ScrapBaba, an online platform where users can manage scrap items. The API allows for various functionalities such as creating scrap listings, managing users, sending notifications, and more.

## Features

- **User Management**: Allows users to sign up, log in, and update their profiles.
- **Scrap Listings**: Users can add, update, and view scrap item listings.
- **Notification System**: Sends notifications to users via WhatsApp using Twilio.
- **Database**: Uses MySQL to store user and scrap data.

## Dependencies

The project relies on the following npm packages:

- **body-parser**: Middleware to parse incoming request bodies in a middleware before your handlers.
- **dotenv**: Loads environment variables from a `.env` file into `process.env`.
- **express**: Fast, unopinionated, minimalist web framework for Node.js.
- **mysql2**: MySQL client for Node.js, used for database connections.
- **nodemon**: Tool that helps develop Node.js applications by automatically restarting the server when file changes are detected.
- **twilio**: API for sending SMS and WhatsApp messages.
- **whatsapp**: A wrapper to send messages via WhatsApp.
