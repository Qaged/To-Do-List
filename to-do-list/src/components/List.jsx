import React, { useReducer, useState } from "react";

import ListItem from "./ListItem";
import AddItem from "./AddItem";

const List = () => {
  const [items, setItem] = useState([]);
  const [input, setInput] = useState("");
  const [checked, setChecked] = useState(false);

  const handleContentChange = (event) => {
    setInput(event.target.value);
  };

  const handleCheckedChange = (event) => {
    setChecked(event.target.checked);
  };

  const addListItem = () => {
    setItem([...items, input]);
    setInput("");
  };

  return (
    <div className="List">
      <h1>My To Do List</h1>
      {items.map((item) => {
        return (
          <ListItem
            value={checked}
            onChange={handleCheckedChange}
            content={item}
            checked={checked}
          />
        );
      })}
      <AddItem
        addItem={addListItem}
        onChange={handleContentChange}
        value={input}
      />
    </div>
  );
};

export default List;
