require("dotenv").config();
const app = require("./app");
// const { PrismaClient } = require("@prisma/client");

// const prisma = new PrismaClient();

const PORT = process.env.PORT || 4000;

async function startServer() {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
