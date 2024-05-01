import React, { useRef } from "react";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import QRCode from "qrcode.react";
import { useReactToPrint } from "react-to-print";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import useStyles from "./styles";

const PRODUCT_INFORMATION = [
  { label: "Weight", value: "30kg" },
  { label: "Power", value: "Durable" },
];

const LABEL_DETAILS = [
  { label: "Manufacturing Date", value: "[February 2021]" },
  { label: "Manufacturer Name", value: "[MAN AND MAN ENTERPRISE]" },
  { label: "Contact Address", value: "[Atwima Darko]" },
];

const QRCodeItem = ({ qrValue }) => {
  const classes = useStyles();

  return (
    <Grid item xs={4}>
      <Box textAlign="center" p={2} border={1} borderColor="grey.400">
        <Typography variant="body1" style={{ fontSize: "small" }}>
          Obia se 3y3
        </Typography>
        <Typography variant="h6" style={{ fontSize: "medium" }}>
          HOLY COOK STOVE
        </Typography>

        <Box mt={2}>
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography variant="subtitle2">Product</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">Information</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {PRODUCT_INFORMATION.map((item, index) => (
                  <TableRow key={`info-${index}`}>
                    <TableCell>
                      <Typography variant="body2">{item.label}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">{item.value}</Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Box mt={2} display="flex" justifyContent="center" alignItems="center">
          <Box>
            <QRCode value={qrValue} size={128} />
          </Box>
        </Box>

        <Box mt={2}>
          <TableContainer component={Paper}>
            <Table size="small">
              <TableBody>
                {LABEL_DETAILS.map((detail, index) => (
                  <TableRow key={`label-detail-${index}`}>
                    <TableCell>
                      <Typography variant="body2">{detail.label}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">{detail.value}</Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Box mt={2}>
          <TextField
            value={qrValue}
            variant="outlined"
            size="small"
            fullWidth
            InputProps={{
              readOnly: true,
            }}
          />
        </Box>
      </Box>
    </Grid>
  );
};

const GeneratedQRCode = ({ qrCodes }) => {
  const componentRef = useRef();
  const classes = useStyles();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: `
      @page {
        size: A4 landscape;
        margin: 0;
      }
      @media print {
        body {
          margin: 1cm;
        }
      }
    `,
  });

  return (
    <Box mt={2} ref={componentRef}>
      <Typography variant="h6" component="div" gutterBottom>
        Generated QR Codes
      </Typography>
      <Grid container spacing={2}>
        {qrCodes.map((qrValue, index) => (
          <QRCodeItem key={`qrCode-${index}`} qrValue={qrValue} />
        ))}
      </Grid>

      <Box mt={2} display="flex" justifyContent="space-between">
        <Button variant="contained" color="primary" onClick={handlePrint}>
          Print QR Codes
        </Button>
      </Box>
    </Box>
  );
};

export default GeneratedQRCode;
