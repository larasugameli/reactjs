import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import AppBar from "@mui/material/AppBar";

export default function Footer() {
  return (
    <div className="container-footer">
      <div className="navigator-bar">
        <AppBar
          className="header"
          position="static"
          style={{ backgroundColor: "#5e5e5e" }}
        >
          <p>© 2022 P-Grab Company, All rights reserved.</p>
          <p style={{ textTransform: "uppercase" }}>Seguinos en redes!</p>

          <ul className="navigator-footer">
            <li>
              <a
                href="https://www.facebook.com/pgrabar"
                rel="noopener noreferrer"
              >
                <FacebookIcon color="disabled" fontSize="large" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/p_grab/"
                rel="noopener noreferrer"
              >
                <InstagramIcon color="disabled" fontSize="large" />
              </a>
            </li>
          </ul>
        </AppBar>
      </div>
    </div>
  );
}
