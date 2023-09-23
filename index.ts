import dotenv from "dotenv";
import express from "express";
import router from "./src/routes";




async function start() {
  try {
    dotenv.config();
    const app = express();
    const PORT = process.env.APP_PORT;
    app.use(express.json());
    app.use("/api/v1", router);

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

void start()
