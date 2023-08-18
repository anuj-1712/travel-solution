import React, { createContext, useState } from "react";

export const Context = createContext();

export const AppContext = (props) => {
  // all the states
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");
  const [itemsReq, setItemsReq] = useState(1);
  const [packed, setPacked] = useState([]);

  return (
    <Context.Provider
      value={{
        list,
        setList,
        item,
        setItem,
        itemsReq,
        setItemsReq,
        packed,
        setPacked,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
