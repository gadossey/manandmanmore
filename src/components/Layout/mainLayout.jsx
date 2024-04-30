import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "gatsby"; //
import { StaticImage } from "gatsby-plugin-image";

const styles = {
  root: {
    color: "var(--black)",
    background:
      "linear-gradient(106.37deg, #9bc5a3 29.63%, #64b678 51.55%, #2e8b57 90.85%)",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Inter, sans-serif",
  },
  appGlass: {
    position: "relative",
    display: "flex",
    flexDirection: { xs: "column", sm: "column" },
    height: "97%",
    width: "97%",
    background: "rgba(154, 205, 50, 0.54)",
    "@media (max-width: 768px)": {
      background: "#fff", // Set background color to white on mobile and tablets
    },
    borderRadius: "2rem",
    overflow: "hidden",
  },
  navLink: {
    color: "#000", // Set text color to black
    textDecoration: "none",
    marginRight: "16px",
  },
  appBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff", // Set AppBar color to white

    borderRadius: "2rem 2rem 0 0",
    "@media (max-width: 768px)": {
      top: "auto",
      bottom: 0,
      borderRadius: "0 0 2rem 2rem",
    },
  },
  content: {
    paddingTop: "64px", // 64px is the default height of AppBar. If it's different in your case, please adjust this value accordingly.
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
    flex: 1,
    gap: "16px",
    gridTemplateColumns: "11rem auto 20rem",
    "@media (max-width: 1200px)": {
      gridTemplateColumns: "10% 50% auto",
    },
    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr",
      paddingBottom: "64px", // 64px is the default height of AppBar. If it's different in your case, please adjust this value accordingly.
    },
  },
  toolBar: {
    justifyContent: "space-between",
  },
  titleBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderRadius: "2rem 2rem 0 0",
    display: { xs: "flex", sm: "none" }, // Display only on small screens
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 0",
  },
  
  footer: {
    display: { xs: "none", sm: "flex" },
    justifyContent: "space-between",
    alignItems: "center",
    background: "#fff",
    padding: "16px",
    borderRadius: "0 0 2rem 2rem",
    fontSize: "0.875rem",
  },
  footerLink: {
    color: "#000",
    textDecoration: "none",
    marginRight: "16px",
  },
};

const MainLayout = ({ children, title, layoutType }) => {
  let navigationLinks;
  let additionalComponents;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  switch (layoutType) {
    case "home":
      navigationLinks = (
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {/* Render specific navigation links for the home page */}
          <Link to="/cookstoves" style={styles.navLink}>
            <Button color="inherit">COOKSTOVES</Button>
          </Link>
          <Link to="/promotions" style={styles.navLink}>
            <Button color="inherit">PROMOTIONS</Button>
          </Link>
          <Link to="/parts-and-accessories" style={styles.navLink}>
            <Button color="inherit">PARTS AND ACCESSORIES</Button>
          </Link>
          {/* Add more navigation links for the home page as needed */}
        </Box>
      );
      additionalComponents = null; // No additional components for the home page
      break;
    case "dashboard":
      navigationLinks = (
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {/* Render specific navigation links for the dashboard */}
          <Link to="/dashboard/settings" style={styles.navLink}>
            <Button color="inherit">Settings</Button>
          </Link>
          <Link to="/dashboard/profile" style={styles.navLink}>
            <Button color="inherit">Profile</Button>
          </Link>
          {/* Add more navigation links for the dashboard as needed */}
        </Box>
      );
      additionalComponents = (
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      );
      break;
      case "searchSection": 
      navigationLinks = ( 
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
         {/* Render specific navigation links for the search section */} 
         <Link to="/search" style={styles.navLink}>
           <Button color="inherit">Search</Button> 
           </Link> 
           {/* Add more navigation links for the search section as needed */}
            </Box> );
             additionalComponents = ( <div> {/* Additional components for the search section */}
              </div> ); break;
       case "menuBar":
        navigationLinks = (
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button
              color="inherit"
              aria-controls="file-menu"
              aria-haspopup="true"
              onClick={handleMenuOpen}
              style={styles.navLink}
            >
              File
            </Button>
            <Button
              color="inherit"
              aria-controls="edit-menu"
              aria-haspopup="true"
              onClick={handleMenuOpen}
              style={styles.navLink}
            >
              Edit
            </Button>
            <Button
              color="inherit"
              aria-controls="view-menu"
              aria-haspopup="true"
              onClick={handleMenuOpen}
              style={styles.navLink}
            >
              View
            </Button>
            <Button
              color="inherit"
              aria-controls="insert-menu"
              aria-haspopup="true"
              onClick={handleMenuOpen}
              style={styles.navLink}
            >
              Insert
            </Button>
            <Button
              color="inherit"
              aria-controls="format-menu"
              aria-haspopup="true"
              onClick={handleMenuOpen}
              style={styles.navLink}
            >
              Format
            </Button>
            <Button
              color="inherit"
              aria-controls="data-menu"
              aria-haspopup="true"
              onClick={handleMenuOpen}
              style={styles.navLink}
            >
              Data
            </Button>
            {/* Add more menu items for the menu bar as needed */}
            <Menu
              id="file-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              style={styles.navLink}
            >
              <MenuItem onClick={handleMenuClose}>New</MenuItem>
              <MenuItem onClick={handleMenuClose}>Open</MenuItem>
              <MenuItem onClick={handleMenuClose}>Save</MenuItem>
            </Menu>
            <Menu
              id="edit-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Cut</MenuItem>
              <MenuItem onClick={handleMenuClose}>Copy</MenuItem>
              <MenuItem onClick={handleMenuClose}>Paste</MenuItem>
            </Menu>
            <Menu
              id="view-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Zoom In</MenuItem>
              <MenuItem onClick={handleMenuClose}>Zoom Out</MenuItem>
              <MenuItem onClick={handleMenuClose}>Reset Zoom</MenuItem>
            </Menu>
            <Menu
              id="insert-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Insert Image</MenuItem>
              <MenuItem onClick={handleMenuClose}>Insert Table</MenuItem>
              <MenuItem onClick={handleMenuClose}>Insert Link</MenuItem>
            </Menu>
            <Menu
              id="format-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Font</MenuItem>
              <MenuItem onClick={handleMenuClose}>Text Color</MenuItem>
              <MenuItem onClick={handleMenuClose}>Background Color</MenuItem>
            </Menu>
            <Menu
              id="data-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Sort</MenuItem>
              <MenuItem onClick={handleMenuClose}>Filter</MenuItem>
              <MenuItem onClick={handleMenuClose}>Aggregate</MenuItem>
            </Menu>
          </Box>
        );
        additionalComponents = null;
        break;
    case "dataprocess":
      navigationLinks = (
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {/* Render specific navigation links for the other scenario */}
          <Link to="/other/page1" style={styles.navLink}>
            <Button color="inherit">TRACE</Button>
          </Link>
          <Link to="/other/page2" style={styles.navLink}>
            <Button color="inherit">HISTORY 2</Button>
          </Link>
          {/* Add more navigation links for the other scenario as needed */}
        </Box>
      );
      additionalComponents = (
        <div>
        {/* Additional components for the search section */}
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>
            <Link to="/search/file" style={styles.navLink}>
              File
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link to="/search/edit" style={styles.navLink}>
              Edit
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link to="/search/view" style={styles.navLink}>
              View
            </Link>
          </MenuItem>
          {/* Add more menu items for the search section as needed */}
        </Menu>
      </div>
      );
      break;
    default:
      navigationLinks = null;
      additionalComponents = null;
  }
  
  return (
    <Box sx={styles.root}>
      <Box sx={styles.appGlass}>
      <AppBar position="static" color="transparent" elevation={0} sx={styles.titleBar}>
      <Typography variant="h6">{title}</Typography>
    </AppBar>
        <AppBar color="primary" sx={styles.appBar}>
          <Toolbar sx={styles.toolBar}>
             <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
            </Box>
            <Link to="/" style={styles.navLink}>
              <StaticImage
                src="../../images/logo.png" // replace with the relative path to your logo
                width={50}
                quality={50}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="A Gatsby Logo"
              />
            </Link>

            {navigationLinks}

             {additionalComponents}
            
            <Box sx={{ display: { xs: "block", sm: "none" } }}>
              <IconButton color="inherit">
                <ArrowBackIcon />
              </IconButton>
              <IconButton color="inherit">
                <HomeIcon />
              </IconButton>
              <IconButton color="inherit">
                <ArrowForwardIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Box sx={styles.content}>{children}</Box>
        <Box sx={styles.footer}>
          <Typography variant="body2">
            Copyright &copy; {new Date().getFullYear()} Man and Man Enterprise.
            All rights reserved.
          </Typography>
          <Box>
            <Link to="/about" style={styles.footerLink}>
              About Us
            </Link>
            <Link to="/careers" style={styles.footerLink}>
              Careers
            </Link>
            <Link to="/contact" style={styles.footerLink}>
              Contact
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;
