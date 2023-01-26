import { makeStyles } from "@material-ui/styles";

export const useCategoryStyles = makeStyles((theme) => ({
  heading: {
    textAlign: "left",
    fontSize: "1.15rem",
    fontWeight: "700",
    marginBottom: '20px'
  },
  chips: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: '15px',
    "& .MuiButton-root:hover": {
      backgroundColor: "lightgrey",
    },
  },
  chipBtn:{
    fontSize:"0.7rem !important",
    margin:'0.25rem',
    padding:'8px',
    minWidth: "120px",
    textAlign: "left",
    borderRadius: "0",
    backgroundColor: "#f8f8f8",
    justifyContent: "flex-start",
    fontFamily: "Lato",
    display: "flex",
    flexDirection: "row",
    margin: 0
  },
  avatar:{
    backgroundPosition: "cover",
    objectFit: "contain",
    marginRight: "4px",
  },
  newChip:{
    display: "inline",
    backgroundColor: "#f21d00",
    color: "white",
    borderRadius: "10px",
    padding: "0 5px",
    width: "30px",
    fontSize: "9px",
    marginLeft: "8px",
  }
}));
