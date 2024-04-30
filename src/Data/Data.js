import React from "react";

import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PackageIcon from "@mui/icons-material/Package";
import BarChartIcon from "@mui/icons-material/BarChart";
import LogoutIcon from "@mui/icons-material/Logout";


// Analytics Cards imports


// Recent Card Imports
import img1 from "../components/imgs/img1.png";
import img2 from "../components/imgs/img2.png";
import img3 from "../components/imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: <DashboardIcon />,
    heading: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: <AssignmentIcon />,
    heading: "Orders",
    path: "/orders",
  },
  {
    icon: <PeopleAltIcon />,
    heading: "Customers",
    path: "/customers",
  },
  {
    icon: <PackageIcon />,
    heading: "Products",
    path: "/products",
  },
  {
    icon: <BarChartIcon />,
    heading: "Analytics",
    path: "/analytics",
  },
];

