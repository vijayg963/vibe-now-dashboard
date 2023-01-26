import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  sideBar: {
    backgroundColor: "rgb(40,41,42)",
    color: "white",
    minHeight: "90.4vh",
    height: "100%",
    width: "17wh",
    position: 'relative',
  },
  createEvent: {
    backgroundColor: "rgb(236,157,80)",
    color: "black",
    width: "80%",
    borderRadius: "0",
    textAlign: "center",
    margin: "10%",
  },
  tabs: {
    backgroundColor: "transparent",
    width: "100%",
    paddingTop: "14px",
    height: "35px",
    fontWeight: "600",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "0",
    boxShadow: "none",
    "& :hover": {
      color: "white",
      backgroundColor: "transparent !important",
    },
  },
  bottomTabs: {
    backgroundColor: "transparent",
    width: "100%",
    height: "39px",
    fontWeight: "600",
    justifyContent: "start",
    borderRadius: "0",
    boxShadow: "none",
    "& :hover": {
      color: "white",
      backgroundColor: "transparent !important",
    },
  },
  hrSet: {
    borderTop: "0.5px solid grey",
    width: "80%",
    margin: "0 auto",
    margin: "8px 10%",
  },
icon:{
    marginRight:'8px', fontSize: "1.2rem"
},
activeMoreOpt:{
    color: '#ee8822',
    fontSize:"0.8rem",
  },
  
logoutBox:{
  width:'100%',
  position: 'absolute',
  bottom: "0",
  marginBottom:'3rem',
},

}));
