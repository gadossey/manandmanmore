import React from "react";
import { TextField } from "@mui/material";

const ProductForm = ({
  structureData,
  stoveQuantity,
  handleInputChange,
  handleStoveQuantityChange,
  validateForm,
}) => {
  return (
    <div>
      <TextField
        variant="outlined"
        label="Manufacturer ID"
        value={structureData.manufacturerId}
        onChange={(e) => handleInputChange(e, "manufacturerId")}
      />
      <TextField
        variant="outlined"
        label="Sequential Number"
        value={structureData.sequentialNumber}
        onChange={(e) => handleInputChange(e, "sequentialNumber")}
      />
      <TextField
        variant="outlined"
        label="Stove Quantity"
        value={stoveQuantity}
        onChange={handleStoveQuantityChange}
      />
    </div>
  );
};

export default ProductForm;
