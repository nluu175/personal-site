import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

import "./SocialBar.css";

const SocialBar = () => {
  const socialBarStyle = {
    gridArea: "header",
    float: "right",
  };

  return (
    <div className="bottom-outer-border" style={socialBarStyle}>
      <ul className="social-bar-list">
        <li className="item">
          <a
            href="mailto:lnminh175@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>
        </li>
        <li className="item">
          <a
            href="https://www.linkedin.com/in/ln-minh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="item">
          <a
            href="https://github.com/nluu175"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialBar;
