import { Avatar, Box, Button, Chip, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { data } from "./data";
import { useCategoryStyles } from "./style";

function Categories() {
  const classesCategory = useCategoryStyles();
  return (
    <Box className={classesCategory.container}>
      <Typography variant="h3" className={classesCategory.heading}>
        Categories
      </Typography>
      <Box className={`${classesCategory.chips} chip`}>
        {data.map((e, i) => (
          <Button key={i} className={classesCategory.chipBtn}>
            <Image
              width={12}
              height={12}
              className={classesCategory.avatar}
              alt={e.catagory}
              src={e.img}
            />
            <Typography sx={{ color: "black", fontSize: "0.7rem" }}>
              {e.catagory}
            </Typography>
            {e.new ? <Box className={classesCategory.newChip}>New</Box> : ""}
          </Button>
        ))}
      </Box>
    </Box>
  );
}

export default Categories;
