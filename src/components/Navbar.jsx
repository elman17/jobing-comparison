import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

const pages = ["Ana Səhifə", "Vakansiyalar", "Bloqlar", "Əlaqə", "Haqqımızda"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#fff",
        boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* LOGO — desktop */}
          <Box
            component="a"
            href="#"
            sx={{ display: { xs: "none", md: "flex" }, mr: 4 }}
          >
            <img
              src="https://jobing.az/Images/Static/LogoMobile.png"
              alt="Jobing.az"
              style={{ height: "36px", objectFit: "contain" }}
            />
          </Box>

          {/* MOBILE MENU ICON */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              sx={{ color: "#555" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center", color: "#555" }}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* LOGO — mobile */}
          <Box
            component="a"
            href="#"
            sx={{ display: { xs: "flex", md: "none" }, flexGrow: 1 }}
          >
            <img
              src="https://jobing.az/Images/Static/LogoMobile.png"
              alt="Jobing.az"
              style={{ height: "30px", objectFit: "contain" }}
            />
          </Box>

          {/* NAV LINKS — desktop */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              ml: "auto",
              mr: 2,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                    color: "#555",
                //   color: page === "Vakansiyalar" ? "#fff" : "#555",
                //   backgroundColor:
                //     page === "Vakansiyalar" ? "#FF6B2C" : "transparent",
                //   fontWeight: page === "Vakansiyalar" ? 600 : 500,
                  fontSize: "18px",
                  textTransform: "none",
                  borderRadius: "8px",
                  px: 2,
                  "&:hover": {
                    backgroundColor: "#c25b02",
                    color: "#fff",
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* ELAN YERLEŞDIR BUTTON */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#c25b02",
              color: "#fff",
              fontWeight: 600,
              fontSize: "14px",
              textTransform: "none",
              borderRadius: "8px",
              px: 3,
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#c25b02",
                boxShadow: "none",
              },
            }}
          >
            Elan Yerləşdir
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
