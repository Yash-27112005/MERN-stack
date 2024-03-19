require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./router/auth-router");
const contactRouter = require("./router/contact-router.js");
const connectDb = require("./utils/db.js");
const errorMiddleware = require("./middlewares/error-middleware.js");

app.use(express.json());

app.use("/api/auth", router);
app.use("/api/form", contactRouter);
app.use(errorMiddleware);

const PORT = 5000;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`run on ${PORT}`);
  });
});
