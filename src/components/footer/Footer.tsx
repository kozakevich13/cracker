import React from "react";
import "./Footer.css";
import {
  Share,
  Pinterest,
  Facebook,
  Instagram,
  Phone,
  LocationOn,
} from "@mui/icons-material";

const Footer: React.FC = () => (
  <div className="footer">
    <div>
      <div className="footer-title">
        <Phone />
        <span>PHONE</span>
      </div>
      <div className="footer-text">
        <div className="link">+48 (987) 345 - 6789</div>
      </div>
    </div>
    <div>
      <div className="footer-title">
        <LocationOn />
        ADRESS
      </div>
      <div className="footer-text">
        Cracker Inc. <br />
        10 Cloverfield Lane <br />
        Berlin IL 10928, Germany
      </div>
    </div>
    <div>
      <div className="footer-title">
        <Share />
        SHARE
      </div>
      <div className="footer-text">
        <div className="StyledTitle">
          <Pinterest />
          <div className="footer-link">pinterest.com</div>
        </div>
        <div className="footer-title">
          <Facebook />
          <div className="footer-link">facebook.com</div>
        </div>
        <div className="footer-title">
          <Instagram />
          <div className="footer-link">instagram.com</div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
