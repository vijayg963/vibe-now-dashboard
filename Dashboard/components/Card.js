import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { useStyles } from "./style";
import { BsCalendarCheck, BsStar, BsThreeDotsVertical } from "react-icons/bs";
import { BiShareAlt, BiStar } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";

function Card({ shear, menu, heart, img, title, time, fee,review,location }) {
  const classes = useStyles();
  const [favorite, setFavorite] = useState(false);
  return (
    <Box className={classes.card}>
      <Box>
        <Box className={classes.logoSection}>
          {shear && <Button className={classes.Btn}>{shear}</Button>}
          <Button className={classes.Btn}>{menu ? menu : heart}</Button>
        </Box>
        <Image src={img} alt={"cardImg"} width={219} height={145} />
      </Box>
      <Box className={classes.cardContent}>
        <Typography
          className={`${classes.cardTitle} ${
            title === "Draft" ? "danger" : ""
          }`}
        >
          {title}
        </Typography>
        <Typography className={classes.cardEventTime}>
          <BsCalendarCheck /> {time}
        </Typography>
        { review &&
          <Typography className={classes.cardEventTime}>
            <BiStar style={{fontWeight:'700', fontSize:'1rem', marginLeft:"-2px"}} /> {review}
          </Typography>
        }
        { location &&
          <Typography className={classes.cardEventTime}>
            <Image src="/icons/mapPin.png" alt="map" width={12} height={15} /> {location}
          </Typography>
        }
        <Box className={classes.cardEventTime} sx={{ m: "0!important" }}>
          <Typography className={classes.cardEventPrice}>{fee}</Typography>
          Entry fee
        </Box>
      </Box>
    </Box>
  );
}

export default Card;
