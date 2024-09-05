const NavigationBar = () => {
  const NavigationBarStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    height: "50px",
    width: "600px",
  };

  return (
    <div className="nav-bar" style={NavigationBarStyle}>
      <div className="nav-item">About</div>
      <div className="nav-item">Experience</div>
      <div className="nav-item">Projects</div>
      <div className="nav-item">Contact</div>
    </div>
  );
};

export default NavigationBar;
