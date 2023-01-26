import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  homeContainer: {
    backgroundColor: "rgb(243,244,247)",
    padding: "1.5rem",
  },
  sideBar: {
    minWidth: "200px",
  },
  sideBarcard: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: "1rem",
    border: "1px solid #DDDDDD",
    marginBottom: "1rem",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  flex:{
    display:"flex",
  },
  tableContainer: {
    margin: "1rem",
    border: "1px solid #DDDDDD",
    backgroundColor:"white",
    "& .MuiTableCell-root":{
      padding:"0.5rem 1rem",
      height:"56px !important",
      color: "black !important",
    }
  },
}));
