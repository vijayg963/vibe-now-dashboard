import { Box, Typography } from "@mui/material";
import React, { useState, useContext } from "react";
import { DashBoardHeader } from "../components/DashBoardHeader";
import { EventIndexContext } from "../DashboardLayout";
import Categories from "./categories";
import { RecentSales } from "./recentSales";
import { useStyles } from "./style";
import BasicTable from "./Table";
import BasicTabs, { ActiveCard, DraftCard, MyEventCard } from "./Tabs";
// import Select from "react-select";

const options = [
  { value: "All", label: "All" },
  { value: "For you", label: "For you" },
  { value: "Any", label: "Any" },
];

export const Events = () => {
  const values = useContext(EventIndexContext);
  const { value, setValue } = values;
  const classes = useStyles();
  const [filter, setFilter] = useState("All");
  // console.log(filter);
  return (
    <Box className={classes.homeContainer}>
    <Box className={classes.header}>
    <DashBoardHeader />
    <Box sx={{width:'33%'}}>
    <DashBoardHeader title={"Essential view"} subTitle={"Recent information"}/>
    </Box>
    </Box>  
      <Box  sx={{display:"flex"}}>
        <Box className={classes.leftSec}>
          <Box className={classes.flexBetween}>
            <BasicTabs value={value} setValue={setValue} />
            <Box className={classes.flexBetween}>
              <select
                onChange={(e) => setFilter(e.target.value)}
                name="filter"
                id="filter"
              >
                <option value="Filter">Filter</option>
                {options.map((elm, i) => (
                  <option key={i} value={elm.label}>
                    {elm.value}
                  </option>
                ))}
              </select>
              <Typography className={classes.filter}>{filter}</Typography>
            </Box>
          </Box>
          <Box>
            {value === 0 ? (
              <ActiveCard />
            ) : value === 1 ? (
              <DraftCard />
            ) : (
              <MyEventCard />
            )}
          </Box>
        </Box>
        <Box className={classes.rightSec}>
        <RecentSales/>
        <BasicTable/>
        <Categories />
        </Box>
      </Box>
    </Box>
  );
};
