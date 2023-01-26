import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  title: {
    fontSize: "1.2rem",
    fontWeight: "700",
  },
  subTitle: {
    fontSize: "0.75rem",
  },

  flex18: {
    flex: "0 1 18%",
  },

  card: {
    border: "1px solid #DDDDDD",
    width: "220px",
    position: "relative",
  },

  logoSection: {
    position: "absolute",
    top: "10px",
    right: "15px",
    display: "flex",
    gap: "9px",
  },

  cardContent: {
    padding: "0.8rem 1rem",
    lineHeight: "2",
  },

  cardTitle: {
    fontSize: "0.9rem",
    fontWeight: "700",
  },
  cardEventTime: {
    fontSize: "0.8rem",
    color: "grey",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    margin: "0.7rem 0",
  },

  cardEventPrice: {
    fontSize: "1.2rem",
    color: "#ec9d50",
    fontWeight: "700",
  },

  Btn: {
    color: "black",
    backgroundColor: "white",
    minWidth: "23px",
    height:"26px",
    borderRadius:"50% !important",
  },


  profileCard: {
    border: "1px solid #DDDDDD",
    margin: "1rem 0",
    padding: "0.9rem 1rem",
    backgroundColor: "white",
    textAlign: "center",
  },
  profileCardTitle: {
    fontSize: "14px",
    fontWeight: "700",
  },
  userName: {
    fontSize: "13px",
    color: "rgb(40,41,42)",
    fontWeight: "500",
    marginBottom: "4px",
  },

  userLocation: {
    fontSize: "11px",
    color: "grey",
  },

  profileEnable: {
    fontSize: "11px",
  },

  profileEnableBtn: {
    fontSize: "11px",
    display: "inline",
    color: "green",
  },

  profileViewBtn: {
    color: "black",
    backgroundColor: "rgb(236,157,80)",
    borderRadius: "0",
    fontSize: "10px",
    width: "70%",
    margin: "1rem 0",
    height: "26px",
  },

  totalSaleSectionLeft: {
    display: "flex",
    flexDirection: "column",
    gap: "0.6rem",
  },

  textsmall: {
    fontSize: "0.7rem",
    color: "rgb(40,41,42)",
  },

  flex: {
    display: "flex",
  },

  flexBetween: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },


  textSmBold: {
    fontSize: "0.8rem",
    fontWeight: "700",
  },

  totalSaleValue: {
    fontSize: "0.9rem",
    fontWeight: "700",
  },

  resourceChips: {
    width: "118%",
    display: "flex",
    justifyContent: "space-between",
    padding: "0.6rem 0",
    borderBottom: "1px solid #DDDDDD",
  },


  cvSection: {
    width:"200px",
    backgroundColor: "white",
    padding: "1rem",
    border: "1px solid #DDDDDD",
  },

  resourceChips: {
    width: "118%",
    display: "flex",
    justifyContent: "space-between",
    padding: "0.6rem 0",
    borderBottom: "1px solid #DDDDDD",
  },

  userDataSection: {
    display: "flex",
    margin: "1rem 0",
  },

  cvHeader: {
    display: "flex",
    borderBottom: "1px solid #DDDDDD",
  },

  cvText: {
    fontSize: "0.9rem",
    fontWeight: "600",
    margin: "0.7rem 0",
    marginRight: "2rem",
  },

  cvCard: {
    width: "49.5%",
    padding: "0.2rem",
    margin: "0.4rem 0",
  },

  cvSectionMain: {
    display: "flex",
    flexWrap: "wrap",
  },

  sideBarcard: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: "1rem",
    border: "1px solid #DDDDDD",
  },
  


}));
