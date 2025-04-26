const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
// const externalService = require("../services/externalService");

exports.getStats = async (req, res) => {
  try {
    const stats = await prisma.userStats.findUnique({
      where: { userId: req.user.id },
    });
    res.json(stats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// exports.fetchExternalData = async (req, res) => {
//   const data = externalService.getMockData();
//   res.json(data);
// };

exports.receiveWebhook = async (req, res) => {
  console.log("Webhook received:", req.body);
  res.status(200).send("Webhook received");
};
