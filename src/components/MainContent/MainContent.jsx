import { useState } from "react";

import ListBox from "./ListBox";
import DescriptionBox from "./DescriptionBox";
import PageTitleText from "./PageTitleText";

import { mainInfo } from "../../data/data";

const MainContent = () => {
  const innerContainerStyle = {
    gridArea: "inner-container",
    height: "300px",
    // flex properties
    display: "flex",
    justifyContent: "space-around",
  };

  const [currentItem, setCurrentItem] = useState({
    title: mainInfo[0].title,
    content: mainInfo[0].content,
    github: "",
    demo: "",
  });

  return (
    <div className="inner-container" style={innerContainerStyle}>
      <PageTitleText />
      <DescriptionBox
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <ListBox itemList={mainInfo} setCurrentItem={setCurrentItem} />
    </div>
  );
};

export default MainContent;
