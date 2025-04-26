const express = require("express");
const authRoutes = require("./routes/authRoute");
const userRoutes = require("./routes/userRoute");

const app = express();

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/user", userRoutes);

app.get("/dummy/data", (req, res) => {
  res.json({
    message: "Dummy data fetched successfully",
    data: [1, 2, 3, 4, 5],
  });
});

module.exports = app;
