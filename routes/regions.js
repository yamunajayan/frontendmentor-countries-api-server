import express from "express";
import countriesData from "../data.json" assert { type: "json" };

const router = express.Router();

// GET /regions/:region/countries
router.get("/:region/countries", (req, res) => {
  const { region } = req.params;

  const countriesInRegion = countriesData
    .filter((country) => country.region.toLowerCase() === region.toLowerCase())
    .map((country) => ({
      name: country.name,
      population: country.population,
      region: country.region,
      subregion: country.subregion,
      capital: country.capital,
      currencies: country.currencies,
      languages: country.languages,
      flags: country.flags,
      borders: country.borders,
      topLevelDomain: country.topLevelDomain,
      nativeName: country.nativeName,
    }));

  if (countriesInRegion.length === 0) {
    return res
      .status(404)
      .json({ error: "No countries found for this region" });
  }

  res.json(countriesInRegion);
});

export default router;
