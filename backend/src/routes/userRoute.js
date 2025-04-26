const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/stats", authMiddleware, userController.getStats);
router.post("/webhook/receive", userController.receiveWebhook);

module.exports = router;
