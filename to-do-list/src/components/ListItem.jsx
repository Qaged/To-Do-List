import React from "react";

const ListItem = ({ value, onChange, content, checked }) => {
  return (
    <div className="list-item">
      <input
        value={value}
        type="checkbox"
        onChange={onChange}
        checked={checked}
      />
      <p>{content}</p>
    </div>
  );
};

export default ListItem;
