import React, { useState, useEffect } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const URL = "https://coronavirus-19-api.herokuapp.com/countries";

const Search = ({ chooseCountry }) => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");

  useEffect(() => {
    fetch(URL)
      .then((r) => r.json())
      .then((country) => {
        setCountries(country.map((v) => v.country));
      });
  }, []);

  const changeCountry = (e) => {
    chooseCountry(e.target.value !== "All" ? e.target.value : "");
    setCountry(e.target.value);
  };

  return (
    <div>
      <FormControl variant="filled" style={{ width: 280, color: "white" }}>
        <InputLabel
          id="demo-simple-select-filled-label"
          style={{ color: "white", width: 280 }}
        >
          Country
        </InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={country}
          onChange={changeCountry}
          style={{ color: "white" }}
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          {countries.map((country, id) =>
            country !== "" && country !== "Total:" ? (
              <MenuItem key={id} value={country}>
                {country}
              </MenuItem>
            ) : null
          )}
        </Select>
      </FormControl>
    </div>
  );
};

export default Search;
