import { Box, Button, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useStyles } from "./style";
import { dashBorderMenu, menuData } from "./mockdata";
import { EventIndexContext } from "../DashboardLayout";
import { useRouter } from "next/router";
import ActiveLink from "./ActiveLink";
import { Router } from "react-router-dom";
import Link from "next/link";

function makePath(tag) {
  if (tag === "Dashboard") {
    return "/";
  } else {
    return `/${tag.toLowerCase()}`;
  }
}


const SideMenu = () => {
  const valueContext = useContext(EventIndexContext);
  const { value, setValue } = valueContext;
  const classes = useStyles();
  const [activeDtab, setActiveDtab] = useState("Dashboard");
  const [moreOption, setMoreOption] = useState(null);
  const router = useRouter();
  useEffect(() => {
    setMoreOption();
  }, [activeDtab]);

  return (
    <Box className={classes.sideBar}>
      <Button variant="contained" className={classes.createEvent}>
        + Create Event
      </Button>
      <Box>
        {/* Dashboard Tabs */}
        <Box>
          {dashBorderMenu?.map((b, i) => (
            <Box key={i} onClick={() => setMoreOption(b.opt)}>
              <Link href={makePath(b.tag)}>
                <Button
                  onClick={() => setActiveDtab(b.tag)}
                  className={`${classes.tabs} ${
                    activeDtab === b.tag ? "activeDtab" : ""
                  }`}
                  variant="contained"
                >
                  <Box sx={{ display: "flex" }}>
                    <Typography className={classes.icon}>{b.icons}</Typography>
                    <Typography sx={{ fontSize: "0.8rem", fontWeight: "500" }}>
                      {b.tag}
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: "1.2rem" }}>{b.more}</Typography>
                </Button>
              </Link>
              {activeDtab &&
                activeDtab === b.tag &&
                b.opt?.map((o, i) => (
                  <Button
                    key={i}
                    onClick={() => setValue(i)}
                    className={classes.activeMoreOpt}
                    sx={{
                      width: "100%",
                      justifyContent: "left",
                      padding: "0.7rem 2.8rem",
                      color: `${i === value ? "orange" : "white !important"}`,
                    }}
                  >
                    {o}
                  </Button>
                ))}
            </Box>
          ))}
        </Box>
        {/*Logout Section*/}
        <Box className={classes.logoutBox}>
          <Box className={classes.hrSet}></Box>
          {menuData?.map((x, i) => (
            <Button
              key={i}
              className={`${classes.bottomTabs} `}
              variant="contained"
            >
              <img width={18} src={x.icon} alt={x.text} />
              <Typography sx={{ fontSize: "0.8rem", fontWeight: "500", pl: 1 }}>
                {x.text}
              </Typography>
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SideMenu;
