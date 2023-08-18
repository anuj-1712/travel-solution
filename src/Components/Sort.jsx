import React, { useContext } from "react";
import { Context } from "../ContextApi/contextapi";

const Sort = () => {
  const { list, setList } = useContext(Context);

  // this function will sort the list acc to no of items or item names in an ascending order
  const handleSort = (e) => {
    if (e.target.value === "input") {
      const strAscending = [...list].sort((a, b) =>
        a.no_of_items > b.no_of_items ? 1 : -1
      );
      setList(strAscending);
    } else if (e.target.value === "items") {
      const strAscending = [...list].sort((a, b) =>
        a.item_name > b.item_name ? 1 : -1
      );
      setList(strAscending);
    }
  };
  return (
    <select
      className="text-white font-medium bg-blue-700 p-2 rounded-lg outline-none"
      onChange={(e) => handleSort(e)}
    >
      <option value="input">Sort by input order</option>
      <option value="items">Sort by items</option>
    </select>
  );
};

export default Sort;
