import React, { useState, useEffect } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

const RadioOptions = ({ alternatives = [], setValue, value, result }) => {
  const handleChange = event => {
    setValue(event.target.value);
  };
  const styles = {
    display: "flex",
    widht:"90%"
  };
  return (
    <FormControl style={styles}>
      <RadioGroup
        aria-label="alternatives"
        name="alternatives"
        onChange={handleChange}
        style={styles}
      >
        {alternatives.map(({ letter, label }) => {
          const alternativeStyles = { ...styles };

          if (value === letter && result) alternativeStyles.backgroundColor = "#D4EFE4";
          if (value === letter && !result && result !== null) alternativeStyles.backgroundColor = "#FEE0D9";
          return (
            <FormControlLabel
              disabled={result !== null}
              value={`${letter}`}
              control={<Radio color="primary" />}
              label={`${letter}. ${label}`}
              style={alternativeStyles}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};
export default RadioOptions;
