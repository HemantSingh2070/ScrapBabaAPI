const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
const userRouter = require("./routes/user");
const scrapRouter = require("./routes/scraps");
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/user", userRouter);
app.use("/scrap", scrapRouter);

app.listen(PORT);
