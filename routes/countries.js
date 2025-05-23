import express from "express";
import countriesData from "../data.json" assert { type: "json" };
const router = express.Router();

const filterCountry = (country) => ({
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
});

// GET all countries (filtered)
router.get("/", (_req, res) => {
  const filteredCountries = countriesData.map(filterCountry);
  res.json(filteredCountries);
});

// Get one country by name
router.get("/:name", (req, res) => {
  const nameParam = req.params.name.toLowerCase();
  const country = countriesData.find((c) => c.name.toLowerCase() === nameParam);

  if (!country) {
    return res.status(404).json({ error: "Country not found" });
  }

  res.json(filterCountry(country));
});

// Get all countries in a region
router.get("/region/:region", (req, res) => {
  const regionParam = req.params.region.toLowerCase();
  const filtered = countriesData
    .filter((c) => c.region.toLowerCase() === regionParam)
    .map(filterCountry);

  if (filtered.length === 0) {
    return res.status(404).json({ error: "No countries found in this region" });
  }

  res.json(filtered);
});

export default router;
