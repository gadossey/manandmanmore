import React from "react";
import { TextField, Typography } from "@mui/material";

const QuotaInput = ({
  country,
  quotaValue,
  handleCountryQuotaChange,
  totalQuotaAvailable,
  stoveQuantity,
  calculateTotalQuotaAllocated,
}) => {
  return (
    <div>
      <Typography variant="subtitle1">{country.name} Quota</Typography>
      <TextField
        variant="outlined"
        type="number"
        value={quotaValue || ""}
        onChange={(e) => handleCountryQuotaChange(e, country.id)}
        error={totalQuotaAvailable}
        helperText={
          totalQuotaAvailable && quotaValue
            ? "The total quota allocated exceeds the stove quantity"
            : `You have ${
                parseInt(stoveQuantity) - calculateTotalQuotaAllocated()
              } quotas remaining`
        }
      />
    </div>
  );
};

export default QuotaInput;
