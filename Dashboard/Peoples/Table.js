import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { BiLink } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import Image from "next/image";
import { Box, Checkbox, Typography } from "@mui/material";
import { useStyles } from "./style";
import { TableRows } from "../Mock";

export default function BasicTable() {
  const classes = useStyles();
  return (
    <Box className={classes.tableContainer}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCellSet}>SI</TableCell>
            <TableCell className={classes.tableCellSet}>Profile</TableCell>
            <TableCell className={classes.tableCellSet}>Code</TableCell>
            <TableCell className={classes.tableCellSet}>Price</TableCell>
            <TableCell className={classes.tableCellSet}>Event Link</TableCell>
            <TableCell className={classes.tableCellSet}><Checkbox/></TableCell>
            <TableCell className={classes.tableCellSet}>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {TableRows.map((row, i) => (
            <TableRow
              key={row.SI}
              //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell
                className={classes.tableCellSet}
                component="th"
                scope="row"
              >
                0{i + 1}
              </TableCell>
              <TableCell>
              <Box sx={{display:"flex",alignItems:"center"}}>
              <Image src={row.img} alt={"user"} width={26} height={26} />{" "}
              <Typography sx={{   display: "inline",
              fontSize: "0.74rem",ml:1}}> {row.profile}</Typography> 
              </Box>
              </TableCell>
              <TableCell className={classes.tableCellSet}> 
              <Typography sx={{color:"grey !important",   display: "inline",
              fontSize: "0.7rem",}}> {row.code}</Typography>
              </TableCell>
              <TableCell className={classes.tableCellSet}>
                <BiLink />
                <Typography
                  sx={{
                    color: "#3f7ae9",
                    display: "inline",
                    fontSize: "0.7rem",
                  }}
                >
                  {row.link}
                </Typography>{" "}
              </TableCell>
              <TableCell className={classes.tableCellSet}>
                {row.price}
              </TableCell>
              <TableCell className={classes.tableCellSet}><Checkbox /></TableCell>
              <TableCell className={classes.tableCellSet}>{row.menu}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
