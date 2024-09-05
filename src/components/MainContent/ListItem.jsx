/* eslint-disable react/prop-types */
import "./ListItem.css";

import PropTypes from "prop-types";

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

const ListItem = ({ itemData, currentItem, setCurrentItem }) => {
  const itemBoxStyle = {
    alignSelf: "flex-start",
  };

  return (
    <div
      className="menu-item"
      style={itemBoxStyle}
      onClick={() =>
        setCurrentItem({ title: itemData.title, content: itemData.content })
      }
    >
      <li>
        <p
          style={{
            textAlign: "left",
          }}
        >
          {itemData.title}
        </p>
      </li>
      <ItemBorder />
    </div>
  );
};

ListItem.propTypes = {
  itemData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  currentItem: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
  setCurrentItem: PropTypes.func.isRequired,
};

export default ListItem;
