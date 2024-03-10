import PropTypes from "prop-types";
import { useEffect, useRef } from "react"; // Import useEffect and useRef
import { projectsInfo } from "../../data/data";
import "./DescriptionBox.css";

const SideBorder = () => {
  const sideBorderStyle = {
    background: "linear-gradient(-45deg, #fafafa,#ee7752, #ff5f00)",
    animation: "gradient 3s ease infinite",
    height: "150px",
    width: "3px",
  };

  return <div style={sideBorderStyle}></div>;
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
    fontSize: "3rem",
  };

  const detailBoxStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    columnGap: "20px",
  };

  const paragraphStyle = {
    height: "150px",
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

  const containerRef = useRef(null); // Create a ref for the description-container

  useEffect(() => {
    // Add animation class when currentItem changes
    containerRef.current.classList.add("animate");
    // Remove animation class after the animation ends
    setTimeout(() => {
      containerRef.current.classList.remove("animate");
    }, 3000); // Change 3000 to match the animation duration in milliseconds
  }, [currentItem]); // Watch for changes in currentItem

  return (
    // adding key attribute here will make React anime everytime this component is rendered
    // https://stackoverflow.com/questions/63186710/how-to-trigger-a-css-animation-on-every-time-a-react-component-re-renders
    <div
      key={currentItem.title}
      className="description-container"
      style={descriptionBoxStyle}
      ref={containerRef}
    >
      <h1 style={h1Style}>{currentItem.title}</h1>
      <div style={detailBoxStyle}>
        <SideBorder />
        <p style={paragraphStyle}>
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
    github: PropTypes.string.isRequired,
    demo: PropTypes.string.isRequired,
  }).isRequired,
  setCurrentItem: PropTypes.func,
};

export default DescriptionBox;
