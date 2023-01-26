import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  homeContainer: {
    backgroundColor: "rgb(243,244,247)",
    padding: "1.5rem",
  },
  cardSection: {
    display: "flex",
    flexWrap: "wrap",
    margin: "1rem 0",
    gap: "1rem",
  },
  card: {
    width: "205px",
    height: "110px",
    padding: "1.1rem 1.5rem",
    border: "1px solid #DDDDDD",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  activeCardCls: {
    backgroundColor: "rgb(236,157,80)",
    color: "white",
  },
  title: {
    fontSize: "1.2rem",
    fontWeight: "700",
  },
  subTitle: {
    fontSize: "0.75rem",
  },
  textsmall: {
    fontSize: "0.7rem",
    color: "rgb(40,41,42)",
  },

  flex: {
    display: "flex",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },

  flexBetween: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  activeText: {
    color: "white",
  },

  textBold: {
    fontWeight: "700",
    marginTop: "0.2rem",
    marginBottom: "0.5rem",
  },

  sideBar: {
    minWidth: "200px",
  },

  borderBottomGraph: {
    borderBottom: "1px solid #DDDDDD",
    padding: "0 1rem",
  },

  graph: {
    border: "1px solid #DDDDDD",
    width: "100%",
    marginRight: "1.2rem",
    backgroundColor: "white",

    "& div canvas": {
      height: "280px !important",
    },
  },

  ghBox: {
    padding: "1.5rem 1rem",
  },

  ghTitle: {
    fontSize: "0.8rem",
    margin: "0.6rem",
    cursor: "pointer",
  },

  activeGh: {
    fontWeight: "700",
  },

  textSmBold: {
    fontSize: "0.8rem",
    fontWeight: "700",
  },

  totalSaleValue: {
    fontSize: "0.9rem",
    fontWeight: "700",
  },

  gap: {
    gap: "1rem",
  },

  totalSaleSectionLeft: {
    display: "flex",
    flexDirection: "column",
    gap: "0.6rem",
  },

  sideBarcard: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: "1rem",
    border: "1px solid #DDDDDD",
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

  pieSmImg:{
    position:'relative',
    float:'right',
    "&:after":{
      display:'block'
    }
  },
}));
