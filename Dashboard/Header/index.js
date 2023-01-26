import {
  Box,
  InputBase,
  Typography,
  Menu,
  MenuItem,
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Avatar,
} from "@mui/material";
import { useStyles } from "./style";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import {FiBell, FiChevronDown, FiHeart, FiMail, FiSearch} from "react-icons/fi"
import Link from "next/link";

const Header = ({sideBar,setsideBar}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box className={classes.Header}>
      <Box className={classes.Header} sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton sx={{ mr:1,display:{md:"block"}}}
            onClick={()=>setsideBar(!sideBar)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
            >
            <MenuIcon />
            </IconButton>
            <Link href={"/"} className={classes.logoIcon}>
              <img width={34} height={38} src="logo.png" alt="logo" />
            </Link>
            <Link href={"/"} className={classes.logo}>Vibe Now</Link>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Box className={classes.searchBox}>
                <InputBase
                  placeholder="Search here…"
                  inputProps={{ "aria-label": "search" }}
                />
                <FiSearch className={classes.searchIcon}/>
                </Box>
                <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
                >
                <Badge badgeContent={0} color="error">
                <FiBell style={{fontSize:'1rem'}}/>
                </Badge>
                </IconButton>
                <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                >
                <Badge badgeContent={0} color="error">
                <FiMail style={{fontSize:'1rem'}} />
                </Badge>
                </IconButton>
                <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                >
                <Badge badgeContent={0} color="error">
                <FiHeart style={{fontSize:'1rem'}}/>
                </Badge>
                </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
              <Avatar src="Usersm.png" alt="userPhoto" ></Avatar>
              <Box sx={{flexDirection:'column',mx:1,textAlign:'left'}}>
              <Typography sx={{fontSize:'0.8rem', fontWeight:'600'}}>Jhone Doe</Typography>
              <Typography sx={{fontSize:'0.65rem'}}>Publisher</Typography>
              </Box>
                <FiChevronDown style={{fontSize:'1.5rem', color:'orange', marginTop:'-8px'}}/>
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </Box>
  );
};

export default Header;
