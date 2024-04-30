import React from "react";
import { Select, MenuItem, Chip, Box } from "@mui/material";

const CountrySelection = ({ countries, selectedCountries, handleCountryChange, handleRemoveCountry }) => {
  return (
    <Select
      label='Country'
      labelId="country-label"
      multiple
      value={selectedCountries.map((country) => country.name)}
      onChange={handleCountryChange}
      fullWidth
      renderValue={(selected) => (
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {selected.map((value, index) => (
            <Chip
              key={index}
              label={value}
              onDelete={() => handleRemoveCountry(selectedCountries[index])}
            />
          ))}
        </Box>
      )}
    >
      {countries.map((country) => (
        <MenuItem key={country.id} value={country.name}>
          {country.name}
        </MenuItem>
      ))}
    </Select>
  );
};

export default CountrySelection;
