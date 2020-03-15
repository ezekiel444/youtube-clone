import React, { useState } from "react";
import { Paper, TextField } from "@material-ui/core";

const SearchBar = onFormSubmit => {
  const [searchterm, setSearchTerm] = useState("");

  const handleChange = event => setSearchTerm(event.target.value);

  const onKeyPress = key => {
    if (key.onKeyPress === "Enter") onFormSubmit(searchterm);
  };

  return (
    <Paper elevation={6} style={{ padding: "25px" }}>
      <TextField
        fullWidth
        label="Search..."
        onChange={handleChange}
        onKeyPress={onKeyPress}
      />
    </Paper>
  );
};

export default SearchBar;
