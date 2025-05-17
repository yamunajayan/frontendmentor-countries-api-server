import express from "express";
import countriesData from "../data.json" assert { type: "json" };
const router = express.Router();

router.get("/", (req, res) => {
  res.json(countriesData);
});

export default router;
