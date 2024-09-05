import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { projectsInfo } from "../../data/data";
import "./DescriptionBox.css";

const SideBorder = ({ height }) => {
  const sideBorderStyle = {
    background: "linear-gradient(-45deg, #fafafa,#ee7752, #ff5f00)",
    animation: "gradient 3s ease infinite",
    height: `${height}px`, // Set the height dynamically
    width: "3px",
  };

  return <div style={sideBorderStyle}></div>;
};

SideBorder.propTypes = {
  height: PropTypes.number.isRequired,
};

const ItemBorder = () => {
  const itemBorderStyle = {
    background: "linear-gradient(-45deg, #fafafa,#ee7752, #ff5f00)",
    animation: "gradient 3s ease infinite",
    height: "1px",
    width: "100px",
    marginTop: "1px",
  };

  return <div style={itemBorderStyle}></div>;
};

const DescriptionBox = ({ currentItem, setCurrentItem }) => {
  const descriptionBoxStyle = {
    width: "50%",
  };

  const h1Style = {
    textAlign: "left",
    fontSize: "2.5rem",
  };

  const detailBoxStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    columnGap: "20px",
  };

  const paragraphStyle = {
    width: "100%",
    textAlign: "left",
    fontSize: "1.1em",
  };

  const hyperlinkStyle = {
    fontSize: "1.1em",
    display: "block",
    marginLeft: "10px",
    cursor: "pointer",
    marginTop: "15px",
    color: "rgb(255, 255, 255)",
    textDecoration: "none",
  };

  const containerRef = useRef(null);
  const paragraphRef = useRef(null); // Create a ref for the paragraph
  const [sideBorderHeight, setSideBorderHeight] = useState(150); // Set a default height

  useEffect(() => {
    // Update the height of SideBorder based on the paragraph's height
    if (paragraphRef.current) {
      setSideBorderHeight(paragraphRef.current.clientHeight);
    }

    // Add animation class when currentItem changes
    containerRef.current.classList.add("animate");
    // Remove animation class after the animation ends
    setTimeout(() => {
      containerRef.current.classList.remove("animate");
    }, 3000); // Match this to the animation duration in milliseconds
  }, [currentItem]); // Watch for changes in currentItem

  return (
    <div
      key={currentItem.title}
      className="description-container"
      style={descriptionBoxStyle}
      ref={containerRef}
    >
      <h1 style={h1Style}>{currentItem.title}.</h1>
      <div style={detailBoxStyle}>
        <SideBorder height={sideBorderHeight} />
        <p
          className="description-paragraph"
          style={paragraphStyle}
          ref={paragraphRef}
        >
          {currentItem.content}
          {/* Project List */}
          {currentItem.title === "Projects" && (
            <div>
              {projectsInfo.map((project) => (
                <div key={project.title}>
                  <a
                    className="project-item"
                    style={hyperlinkStyle}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      setCurrentItem({
                        title: project.title,
                        content: project.content,
                        github: project.github,
                        demo: project.demo,
                      })
                    }
                  >
                    {project.title}
                    <ItemBorder />
                  </a>
                </div>
              ))}
            </div>
          )}
          {/* Project Detail List */}
          {(currentItem.title === "Distributed" ||
            currentItem.title === "Virtual Gym") && (
            <div>
              <a
                className="project-item"
                style={hyperlinkStyle}
                href={currentItem.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                ➜ Github
                <ItemBorder />
              </a>
              <a
                className="project-item"
                style={hyperlinkStyle}
                href={currentItem.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                ➜ Demo
                <ItemBorder />
              </a>
            </div>
          )}
        </p>
      </div>
    </div>
  );
};

DescriptionBox.propTypes = {
  currentItem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    github: PropTypes.string,
    demo: PropTypes.string,
  }).isRequired,
  setCurrentItem: PropTypes.func,
};

export default DescriptionBox;
