import React, { useState, useEffect } from "react";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country, //United States, United Kingdom
            value: country.countryInfo.iso2, // US , UK
          }));
          setCountries(countries);
        });
    };

    getCountriesData();
  }, []);

  const onCountryChange = (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);
  };

  return (
    <div className="App">
      <div className="app__header">
        <h1> Corona Tracker </h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" onChange={onCountryChange} value={country}>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className="app__stats">
        {/* InfoBoxs */}
        {/* InfoBoxs */}
        {/* InfoBoxs */}
      </div>

      {/* Table */}
      {/* Graph */}

      {/* Map */}
    </div>
  );
}

export default App;
