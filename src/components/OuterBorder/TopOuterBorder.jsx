const TopOuterBorder = () => {
  const size = "300px";

  const topBorderStyle = {
    gridArea: "top-border",
    float: "left",
    background: "linear-gradient(-45deg, #fafafa,#ee7752, #ff5f00)",
    backgroundSize: "400% 400%",
    animation: "gradient 3s ease infinite",
    borderRadius: "0.7rem 0rem 0.7rem 0rem",
    clipPath: "polygon(0% 0%, 100% 0%, 93% 7%, 7% 7%, 7% 93%, 0% 100%)",
    height: size,
    width: size,
  };

  return <div className="top-outer-border" style={topBorderStyle}></div>;
};

export default TopOuterBorder;
