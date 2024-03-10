const BottomOuterBorder = () => {
  const size = "300px";

  const topBorderStyle = {
    gridArea: "bottom-border",
    float: "right",
    background: "linear-gradient(-45deg, #fafafa,#ee7752, #ff5f00)",
    backgroundSize: "400% 400%",
    animation: "gradient 3s ease infinite",
    borderRadius: "0.7rem 0rem 0.7rem 0rem",
    clipPath: "polygon(100% 0%, 100% 100%, 0% 100%, 7% 93%, 93% 93%, 93% 7%)",
    height: size,
    width: size,
  };

  return <div className="bottom-outer-border" style={topBorderStyle}></div>;
};

export default BottomOuterBorder;
