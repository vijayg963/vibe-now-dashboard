import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { useStyles } from "./style";

export const ResourcesCard = () => {
    const classes = useStyles();
  return (
    <Box className={classes.totalSaleSectionLeft}>
    <Typography className={`${classes.textSmBold}`}>
      Resources
    </Typography>
    <Box className={classes.resourceChips}>
      <Box className={classes.flex} sx={{ gap: 1 }}>
        <Image
          src={"/icons/Calendar Clock.png"}
          width={18}
          height={18}
        />
        <Typography className={`${classes.textsmall}`}>
          Get Fund Report{" "}
        </Typography>
      </Box>
      <AiOutlineRight />
    </Box>
    <Box className={classes.resourceChips}>
      <Box className={classes.flex} sx={{ gap: 1 }}>
        <Image src={"/icons/History.png"} width={18} height={18} />
        <Typography className={`${classes.textsmall}`}>
          Transaction History{" "}
        </Typography>
      </Box>
      <AiOutlineRight />
    </Box>
    <Box
      className={classes.resourceChips}
      sx={{ border: "none !important" }}
    >
      <Box className={classes.flex} sx={{ gap: 1 }}>
        <Image src={"/icons/Money.png"} width={18} height={18} />
        <Typography className={`${classes.textsmall}`}>
          Request Withdrawal
        </Typography>
      </Box>
      <AiOutlineRight />
    </Box>
  </Box>
  )
}
