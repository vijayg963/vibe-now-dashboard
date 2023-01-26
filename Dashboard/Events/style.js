import { makeStyles } from "@material-ui/styles";
import { padding } from "@mui/system";

export const useStyles = makeStyles((theme) => ({
  homeContainer: {
    backgroundColor: "rgb(243,244,247)",
    padding: "1.5rem",
  },
  flexBetween: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  filter: {
    color: "orange",
    fontSize: "0.86rem",
    width: "45px",
  },
  leftSec: {
    flex: "0 1 70%",
  },

  rightSec: {
    marginTop: "72px",
    flex: "0 1 28%",
    margin: "0 10px",
    padding: "1rem",
    backgroundColor: "white",
  },

  title: {
    fontSize: "1.10rem",
    fontWeight: "900",
    padding: "1rem 0",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },

  flex50: {
    flex: "0 1 50%",
  },

  ticketBox: {
    padding: "1rem 0",
  },

  cardBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subTitle: {
    color: "grey",
    fontSize: "0.8rem",
  },
  cardTickets: {
    color: "grey",
    fontSize: "0.95rem",
    fontWeight: "700",
  },

  tableCellSet: {
    padding: "0.3rem 0.38rem",
  },

  tableContainer: {
    margin: "1rem 0.2rem",
    border: "1px solid #DDDDDD",
  },
}));
