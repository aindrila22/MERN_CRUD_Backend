import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import CONNECT_URL from "./connection.js";

import postRoutes from "./routes/posts.js";

const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECT_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Db connected.Server running on port : ${PORT}`)
    )
  )
  .catch((err) => console.log(err.message));
//merncrudapplication
mongoose.set("useFindAndModify", false);
