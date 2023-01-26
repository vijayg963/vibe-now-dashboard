import { Avatar, Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { currentValue } from "../Mock";
import { useStyles } from "./style";

export const CurrentValueCard = () => {
    const classes = useStyles();
  return (
    <Box className={classes.cvSection}>
    <Typography className={`${classes.textSmBold}`}>
      Current Value
    </Typography>
    <Box className={classes.cvHeader}>
      <Typography className={`${classes.cvText}`}>
        $ 31,627.80
      </Typography>
      <AiOutlineArrowUp
        style={{ color: "green", marginTop: "0.7rem" }}
      />
    </Box>
    <Box className={classes.cvSectionMain}>
      {currentValue.map((v) => (
        <Box className={classes.cvCard}>
          {v.img && (
            <Image
              className={classes.pieSmImg}
              src={v.img}
              width={50}
              height={50}
            />
          )}
          {v.mainTitle && (
            <Typography className={classes.textSmBold} sx={{ mb: 1.3 }}>
              {v.mainTitle}
            </Typography>
          )}
          <Typography className={classes.textsmall}>
            {v.title}
          </Typography>
          <Typography
            className={classes.textSmBold}
            sx={{ color: "grey" }}
          >
            {v.value}
          </Typography>
        </Box>
      ))}
    </Box>
  </Box>
  )
}
