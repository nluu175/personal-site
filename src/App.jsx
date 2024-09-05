import "./App.css";
import SocialBar from "./components/SocialBar";
import MainContent from "./components/MainContent/MainContent";

const App = () => {
  // Outer Borders currently have size 300x300 and currently put in smaller boxes on purpose to serve the effect

  const mainContainerStyle = {
    display: "grid",
    gridTemplateColumns: "300px auto 300px",
    gridTemplateRows: "300px 200px 250px",
    gridTemplateAreas: `". . social-bar"
                        "inner-container inner-container inner-container"
                        ". . ."`,
    width: "100%",
    height: "80vh",
  };

  return (
    <div className="main">
      <div className="main-container" style={mainContainerStyle}>
        {/* <NavigationBar /> */}
        <SocialBar />
        <MainContent />
      </div>
    </div>
  );
};

export default App;
