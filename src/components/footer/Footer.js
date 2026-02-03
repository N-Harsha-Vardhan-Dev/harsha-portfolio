import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          © {new Date().getFullYear()} Harsha Vardhan · Backend & Machine
          Learning Engineer
          <p>
            <span style={{fontSize: "0.85rem", opacity: 0.6}}>
              Built using developerFolio
            </span>
          </p>
        </p>
      </div>
    </Fade>
  );
}
