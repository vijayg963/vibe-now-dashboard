import { Box, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./style";

export const DashBoardHeader = ({
  title,
  subTitle,
}) => {
    const classes = useStyles()
  return (
    <Box>
        <Typography className={classes.title}>
          {title ? title : "Dashboard"}
        </Typography>
        <Typography className={classes.subTitle}>
          {subTitle ? subTitle : "      Realtime Insight on various activities"}
        </Typography>
    </Box>
  );
};
