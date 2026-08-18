require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const zone1Routes = require("./routes/zone1Routes");
//const zone2Routes = require("./routes/zone2Routes");
//const zone3Routes = require("./routes/zone3Routes");
//const zone4Routes = require("./routes/zone4Routes");
//const zone5Routes = require("./routes/zone5Routes");


const app = express();

app.use(cors());
app.use(express.json());

// DB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });

// Health check
app.get("/", (req, res) => {
  res.json({ status: "ok", message: "vr-backend API running" });
});

// Routes
app.use("/api/zone1", zone1Routes);
//app.use("/api/zone2", zone2Routes);
//app.use("/api/zone3", zone3Routes);
//app.use("/api/zone4", zone4Routes);
//app.use("/api/zone5", zone5Routes);

// 404
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Server error", error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || "development"} mode on port ${PORT}`);
});