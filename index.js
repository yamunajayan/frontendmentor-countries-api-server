import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import countriesRouter from "./routes/countries.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(express.json());

app.use("/countries", countriesRouter);

app.get("/", (req, res) => {
  res.send("Hello from the Countries API Server!  Hello");
});

app.listen(PORT, function () {
  console.log(`Countries API Server is running on port ${PORT}`);
});
