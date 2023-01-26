import { Box } from "@mui/material";
import React from "react";
import { DashBoardHeader } from "../components/DashBoardHeader";
import { useStyles } from "./style";
import BasicTable from "./Table";
import { ProfileCard } from "../components/ProfileCard";
import { TotalSale } from "../components/TotalSale";
import { ResourcesCard } from "../components/ResourcesCard";
import { CurrentValueCard } from "../components/CurrentValueCard";

export const Peoples = () => {
  const classes = useStyles();
  return (
    <Box className={classes.homeContainer}>
      <Box className={classes.header}>
        <DashBoardHeader />
        <Box sx={{ width: "200px" }}>
          <DashBoardHeader
            title={"Essential view"}
            subTitle={"Recent information"}
          />
        </Box>
      </Box>

      <Box className={classes.flex}>
        {/* Left Part*/}
        <Box sx={{ flex: "0 1 79%", m: 3 }}>
          <BasicTable />
        </Box>
        {/* Right Part*/}
        <Box className={classes.sideBar} sx={{ mt: 2 }}>
          <ProfileCard />
          <Box className={classes.sideBarcard}>
            <TotalSale />
          </Box>
          <Box className={classes.sideBarcard}>
            <ResourcesCard />
          </Box>
          <CurrentValueCard />
        </Box>
      </Box>
    </Box>
  );
};
