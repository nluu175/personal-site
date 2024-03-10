import "./App.css";
import TopOuterBorder from "./components/OuterBorder/TopOuterBorder";
import BottomOuterBorder from "./components/OuterBorder/BottomOuterBorder";
import SocialBar from "./components/SocialBar";
import MainContent from "./components/MainContent/MainContent";

const App = () => {
  // Outer Borders currently have size 300x300 and currently put in smaller boxes on purpose to serve the effect

  const mainContainerStyle = {
    display: "grid",
    gridTemplateColumns: "300px auto 300px",
    gridTemplateRows: "300px 200px 250px",
    gridTemplateAreas: `"top-border . header"
                        "inner-container inner-container inner-container"
                        ". . bottom-border"`,
    width: "100%",
    height: "80vh",
  };

  return (
    <div className="main">
      <div className="main-container" style={mainContainerStyle}>
        <TopOuterBorder />
        <SocialBar />
        <MainContent />

        <BottomOuterBorder />
      </div>
    </div>
  );
};

export default App;
