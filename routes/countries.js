import express from "express";
import countriesData from "../data.json" assert { type: "json" };
const router = express.Router();

router.get("/", (req, res) => {
  const filteredCountries = countriesData.map((country) => ({
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
  res.json(filteredCountries);
});

export default router;
