import React from "react";

const AddItem = ({ addItem, value, onChange }) => {
  return (
    <div className="add">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addItem();
        }}
      >
        <input type="text" value={value} onChange={onChange} />
        <button type="submit">+</button>
      </form>
    </div>
  );
};

export default AddItem;
