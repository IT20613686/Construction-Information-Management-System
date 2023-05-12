const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const hardwareRouter = require("./routes/hardwares.js");
const hardwareItemRouter = require("./routes/hardwareItems.js");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use('/uploads', express.static('./uploads'));

app.use("/api/users", userRoutes);
app.use("/hardware", hardwareRouter);
app.use("/hardwareItem", hardwareItemRouter);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8070;

app.listen(8070, console.log(`server started on port ${PORT}`));