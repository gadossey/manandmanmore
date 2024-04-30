// src/components/layout.js
import React, { useState } from "react";
import { ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../theme";
import SidebarComponent from "./global/Sidebar";
import Topbar from "./global/Topbar";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/system";

const Layout = ({ children }) => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [selected, setSelected] = useState("");

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            <SidebarComponent isSidebar={isSidebar} selected={selected} setSelected={setSelected} />
            <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
              <Topbar setIsSidebar={setIsSidebar} />
              {children}
            </Box>
            
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Layout;
