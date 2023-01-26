import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { BiLink } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import Image from "next/image";
import { Box } from "@mui/material";
import { useStyles } from "./style";

function createData(img, profile, qty, price, link, menu) {
  return { img, profile, qty, price, link, menu };
}

const rows = [
  createData(
    "/user1.png ",
    "Kristin Watson",
    "1x",
    "$25",
    <BiLink />,
    <BsThreeDotsVertical />
  ),
  createData(
    "/user2.png ",
    "Theresa Webb",
    "2x",
    "$25",
    <BiLink />,
    <BsThreeDotsVertical />
  ),
  createData(
    "/user3.png ",
    "Jerome Bell",
    "1x",
    "$25",
    <BiLink />,
    <BsThreeDotsVertical />
  ),
  createData(
    "/user4.png ",
    "Cameron Williamson",
    "3x",
    "$25",
    <BiLink />,
    <BsThreeDotsVertical />
  ),
];

export default function BasicTable() {
    const classes = useStyles()
  return (
    <Box className={classes.tableContainer}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCellSet}>SI</TableCell>
            <TableCell className={classes.tableCellSet}>Profile</TableCell>
            <TableCell className={classes.tableCellSet}>Qty</TableCell>
            <TableCell className={classes.tableCellSet}>Price</TableCell>
            <TableCell className={classes.tableCellSet}>Link</TableCell>
            <TableCell className={classes.tableCellSet}>{""}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow
              key={row.SI}
              //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell  className={classes.tableCellSet} component="th" scope="row">
                0{i + 1}
              </TableCell>
              <TableCell sx={{display:'flex' ,alignItems:"center", gap:"8px",width:"150px",p:1}}><Image src={row.img} alt={"user"} width={26} height={26}/> {row.profile}</TableCell>
              <TableCell className={classes.tableCellSet} >{row.qty}</TableCell>
              <TableCell className={classes.tableCellSet} >{row.price}</TableCell>
              <TableCell className={classes.tableCellSet}  sx={{ color: "#3f7ae9",fontSize:'1rem !important' }}>{row.link}</TableCell>
              <TableCell className={classes.tableCellSet} >{row.menu}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
