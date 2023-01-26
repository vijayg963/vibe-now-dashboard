import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  Header: {
    display: "flex",
    alignItems: "center",
    "& .MuiAppBar-root": {
      backgroundColor: "rgb(54,55,56) !important",
      "& .mui-style-hyum1k-MuiToolbar-root":{
        padding:'0 1rem',
      },
      "& .MuiIconButton-root":{
padding:'10px'
      }
    },
  },
  logoIcon: {

  },
  logo: {
    color: "orange",
    fontSize: "1.2rem",
    fontWeight: "700",
    margin: "0.8rem",
    fontFamily: "Playfair Display",
  },
  searchBox:{
    width:'280px',
    height:'32px',
    backgroundColor:'#4a4b4c',
    padding:'0.1rem 1rem',
    marginTop:'15px',
    "& input":{
      color:'white',
      fontSize:'0.8rem'
    }
  },
  searchIcon:{
    fontSize:'1.4rem',
    marginLeft:'3.5rem',
    paddingTop:'5px',
  },
}));
