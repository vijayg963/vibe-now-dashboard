import { Box } from "@mui/material";
import React, { createContext, useState } from "react";
import SideMenu from "./SideMenu";
import Header from "./Header";

const activeSideBar = () => {
  {
    display: "block";
  }
};

export const EventIndexContext = createContext();

const DashboardLayout = ({ children }) => {
  const [sideBar, setsideBar] = useState(true);
  const [value, setValue] = useState(0);
  const data = { value, setValue} ;
  return (
    <EventIndexContext.Provider value={data}>
      <Header sideBar={sideBar} setsideBar={setsideBar} />
      <Box sx={{ display: "flex" }}>
        {sideBar && (
          <Box
            className={sideBar ? activeSideBar : ""}
            sx={{ width: "16%", minWidth: "155px" }}
          >
            <SideMenu />
          </Box>
        )}
        <Box sx={{ width: `${sideBar ? "84%" : "100%"}` }}>{children}</Box>
      </Box>
    </EventIndexContext.Provider>
  );
};

export default DashboardLayout;
