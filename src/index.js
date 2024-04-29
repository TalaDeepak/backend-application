import { app } from "./app.js";
import connectDB from "./db/db.js";

process.on("unhandledRejection", (err) => {
  console.log("UHANDLED REJECTION ⚠️ Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

const PORT = process.env.PORT || 7000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at PROT : ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongo DB connectio failed ", err);
  });
