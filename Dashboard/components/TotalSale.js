import { Avatar, Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useStyles } from "./style";

export const TotalSale = () => {
  const classes = useStyles();
  return (
    <Box className={classes.flex}>
      <Box className={classes.totalSaleSectionLeft}>
        <Typography className={`${classes.textSmBold}`}>Total sales</Typography>
        <Typography className={`${classes.totalSaleValue}`}>
          $ 15230.30{" "}
        </Typography>
        <Box className={classes.flexBetween}>
          <Image src={"/icons/Group 244.png"} width={27} height={27} />
          <Typography sx={{ ml: 0.5 }} className={`${classes.textsmall}`}>
            Total ticket
          </Typography>
        </Box>
        <Box className={classes.flexBetween}>
          <Image src={"/icons/Group 245.png"} width={27} height={27} />
          <Typography sx={{ ml: 0.5 }} className={`${classes.textsmall}`}>
            Total sales
          </Typography>
        </Box>
      </Box>
      <Box>
        <Image src={"/icons/Group 250.png"} width={80} height={80} />
      </Box>
    </Box>
  );
};
