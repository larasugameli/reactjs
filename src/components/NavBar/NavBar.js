import "./NavBar.css";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div className="navigator-bar">
        <AppBar style={{ background: "#757575" }} position="static">
          <Toolbar>
            <div className="logo">
              <img src="./logo1.png" alt="logo" />
            </div>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <div className="navigator">
                <a className="navigator__link" href="#">
                  Products
                </a>
                <a className="navigator__link" href="#">
                  About Me
                </a>
                <a className="navigator__link" href="#">
                  Contact Me
                </a>
              </div>
            </Typography>
            <div>
              <Button className="login" color="inherit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </Box>
  );
};

export default NavBar;
