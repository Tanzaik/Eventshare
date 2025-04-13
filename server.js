const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");
require("dotenv").config();
require("./config/passport");

const app = express();
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"));

app.use("/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events")); // Placeholder for next phase

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
