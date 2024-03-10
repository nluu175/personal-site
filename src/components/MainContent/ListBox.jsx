import ListItem from "./ListItem";
import PropTypes from "prop-types";

const ListBox = ({ itemList, setCurrentItem }) => {
  const listBoxStyle = {
    width: "30%",
    height: "400px",
    marginTop: "-20px",
  };

  const listStyle = {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    paddingRight: 0,
  };

  const h3Style = {
    textAlign: "left",
    fontSize: "2rem",
  };

  return (
    <div style={listBoxStyle}>
      <h2 style={h3Style}>About Me</h2>
      <div>
        <ul style={listStyle}>
          {itemList.map((item) => (
            <ListItem
              key={item.content}
              itemData={item}
              setCurrentItem={setCurrentItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

ListBox.propTypes = {
  itemList: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  setCurrentItem: PropTypes.func,
};

export default ListBox;
