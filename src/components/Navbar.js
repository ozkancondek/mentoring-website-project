import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { Link } from "@mui/material";

const pages = [
  ["Home", ["Vision", "Who we are", "Team", "Partners", "News"]],
  ["Account", ["Mentoring Program", "Summer Projects"]],

  [
    "Dashboard",
    ["Become a Mentee ", "Become a Mentor", "Become a Guest Mentor"],
  ],

  [
    "Mitmachen",
    [
      "Schenken Stipendium",
      "Sponsor Endgeräte/Bücher",
      "Sponsor a Project/Internship",
    ],
  ],

  ["Events", ["Workshops"]],

  ["Blog", ["Berlin", "Dresden", "Köln", "Frankfurt", "München"]],

  ["Contact", []],
];
const settings = ["Profile", "Settings", "Apply", "Talk to Advisor", "Logout"];
const tools = ["Login"];
const useStyles = makeStyles(() => ({
  listItemText: {
    color: "black",
  },
  borderButton: {
    border: "2px solid white",
  },

  title: {
    flexGrow: 1,
    display: "none",
    fontFamily: "Girassol",

    "& span": {
      fontSize: 30,
      color: "wheat",
    },
  },
  root: {
    backgroundColor: "rgb(44, 98, 114)",
  },
}));

export const Navbar = () => {
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [hover, setHover] = useState(true);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" className={classes.root}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <CastForEducationIcon fontSize="large" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link href={page[0].toLowerCase()} underline="none">
                    {page[0]}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <CastForEducationIcon fontSize="large" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <div>
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page[0]}
                </Button>
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                  }}
                >
                  <nav
                    aria-label="main mailbox folders"
                    style={{ display: hover ? "none" : "inline-block" }}
                  >
                    <List>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemText
                            className={classes.listItemText}
                            primary={page[1].map((item) => item)}
                          />
                        </ListItemButton>
                      </ListItem>
                      <Divider />
                    </List>
                  </nav>
                </Box>
              </div>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            {tools.map((tool) => (
              <Button
                key={tool}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {tool}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
