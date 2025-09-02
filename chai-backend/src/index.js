import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env", // 👈 check file ka name .env hai, not env
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(
        `🚀 App Listening On http://localhost:${process.env.PORT || 8000}`
      );
    });
  })
  .catch((error) => {
    console.error("❌ MONGODB Connection Failed:", error.message);
  });
