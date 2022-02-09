import React from "react";
import { MdDelete } from "react-icons/md";

function Item({ content, id, setItem }) {
  const deleteHandler = (id) => {
    setItem((preValues) => preValues.filter((item) => item.id !== id));
  };

  return (
    <li>
      <span>{content}</span>
      <MdDelete onClick={() => deleteHandler(id)} className="delete_button" />
    </li>
  );
}

export default Item;
