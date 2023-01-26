import React, { useState } from "react";
import { useStyles } from "./style";
import Image from "next/image";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { currentValue, months, realTimeData } from "../Mock/index.js";
import { FaCalendarAlt, FaRegCalendarAlt } from "react-icons/fa";
import { AiOutlineArrowUp, AiOutlineRight } from "react-icons/ai";
import { StyledEngineProvider } from "@mui/material/styles";
import { DashBoardHeader } from "../components/DashBoardHeader";
import EnhancedTable from "./table";
import Graph from "./graph";
import { ProfileCard } from "../components/ProfileCard";
import { TotalSale } from "../components/TotalSale";
import { ResourcesCard } from "../components/ResourcesCard";
import { CurrentValueCard } from "../components/CurrentValueCard";
// import PieChart from "./pie";

const HomeDashboard = () => {
  const classes = useStyles();
  const [activeCard, setActiveCard] = useState("Total Event");
  const [activeGh, setActiveGh] = useState(1);

  return (
    <Box className={classes.homeContainer}>
    <Box className={classes.header}>
    <DashBoardHeader />
    <Box sx={{width:'200px'}}>
    <DashBoardHeader title={"Essential view"} subTitle={"Recent information"}/>
    </Box>
    </Box>
      <Box className={classes.flex}>
        {/*Main*/}
        <Box sx={{ width: "100%" }}>
          <Box className={classes.cardSection}>
            {realTimeData.map((card) => (
              <Box
                onClick={() => setActiveCard(card.title)}
                className={`${classes.card} ${
                  activeCard === card.title ? classes.activeCardCls : ""
                }`}
              >
                <Box>
                  <Typography
                    className={`${classes.textsmall} ${
                      activeCard === card.title ? classes.activeText : ""
                    } `}
                  >
                    {card.title}
                  </Typography>
                  <Typography className={`${classes.textBold}`}>
                    {card.count}
                  </Typography>
                  <Typography
                    className={`${classes.textsmall} ${
                      activeCard === card.title ? classes.activeText : ""
                    }`}
                  >
                    {card.seen}
                  </Typography>
                </Box>
                <Box>
                  <img width={36} src={card.icon} alt={card.title} />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        {/*Side Bar*/}
        <Box className={classes.sideBar}>
          <ProfileCard />
        </Box>
      </Box>

      {/*Graph section*/}
      <Box className={classes.flex}>
        {/*Left Setion in Graph*/}
        <Box className={classes.graph}>
          <Box
            className={`${classes.flexBetween} ${classes.borderBottomGraph}`}
          >
            <Box className={classes.flex}>
              <Typography
                onClick={() => setActiveGh(1)}
                className={`${activeGh === 1 ? classes.activeGh : ""} ${
                  classes.ghTitle
                }`}
              >
                Selling overview
              </Typography>
              <Typography
                onClick={() => setActiveGh(2)}
                className={`${activeGh === 2 ? classes.activeGh : ""} ${
                  classes.ghTitle
                }`}
              >
                Net sales
              </Typography>
              <Typography
                onClick={() => setActiveGh(3)}
                className={`${activeGh === 3 ? classes.activeGh : ""} ${
                  classes.ghTitle
                }`}
              >
                Online Sales
              </Typography>
            </Box>
            <Box className={classes.flex}>
              <Box>
                <select id="myList" onchange="favTutorial()">
                  <option>Duration </option>
                  <option>Duration </option>
                  <option>Duration </option>
                </select>
              </Box>
              <Box>
                <FaCalendarAlt
                  style={{
                    fontSize: "0.8rem",
                    color: "grey",
                    marginRight: "-0.8rem",
                  }}
                />
                <select id="myList" onchange="favTutorial()">
                  <option> Monthly </option>
                  {months.map((m) => (
                    <option>{m}</option>
                  ))}
                </select>
              </Box>
            </Box>
          </Box>
          <Box className={classes.ghBox}>
            <Graph />
          </Box>
        </Box>
        <Box className={classes.sideBar}>
          <Box className={classes.sideBarcard}>
            <TotalSale />
          </Box>
          <Box sx={{ mt: 2 }} className={classes.sideBarcard}>
            <ResourcesCard />
          </Box>
        </Box>
      </Box>

      {/*Table Data Section*/}
      <Box className={classes.userDataSection}>
        {/*Left Section*/}
        <Box className={classes.graph}>
          <StyledEngineProvider injectFirst>
            <EnhancedTable />
          </StyledEngineProvider>
        </Box>
        {/*Right Section*/}
        <Box className={classes.sideBar}>
          <CurrentValueCard />
        </Box>
      </Box>
      <Box>
        {/*
      <TablePagination
      rowsPerPageOptions={[4, 8, 12]}
      rowsPerPage={4}
      count={12}
      page={3}
      //  count={rows.length}
      // rowsPerPage={rowsPerPage}
      // onPageChange={handleChangePage}
      // onRowsPerPageChange={handleChangeRowsPerPage}
      />
       */}
      </Box>
    </Box>
  );
};

export default HomeDashboard;
