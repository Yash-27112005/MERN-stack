require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRouter = require("./router/auth-router");
const contactRouter = require("./router/contact-router.js");
const serviceRouter = require("./router/service-router.js");
const connectDb = require("./utils/db.js");
const errorMiddleware = require("./middlewares/error-middleware.js");

// let's add cors

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/form", contactRouter);
app.use("/api/data", serviceRouter);
app.use(errorMiddleware);

const PORT = 5000;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`run on ${PORT}`);
  });
});
