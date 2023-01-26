import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./style";

export const ProfileCard = () => {
    const classes = useStyles();
  return (
    <Box className={classes.profileCard}>
      <Typography className={classes.profileCardTitle}>Profile info</Typography>
      <Avatar
        sx={{ width: 56, height: 56, m: "7px auto" }}
        src="userlg.png"
      ></Avatar>
      <Typography className={classes.userName}>Jhonhe Doe</Typography>
      <Typography className={`${classes.userLocation}`}>
        United State
      </Typography>
      <Typography className={classes.profileEnable}>
        Profile:{" "}
        <Typography className={classes.profileEnableBtn}>Enable</Typography>
      </Typography>
      <Button className={classes.profileViewBtn}>View Profile</Button>
    </Box>
  );
};
