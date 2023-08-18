import React, { useContext } from "react";
import { Context } from "../ContextApi/contextapi";
import { MdDelete } from "react-icons/md";
import { IconContext } from "react-icons";
import Sort from "./Sort";

const List = () => {
  const { list, packed, setPacked, setList } = useContext(Context);

  // this function will update the packed status of a particular item
  const handlechange = (position) => {
    const updatedArr = packed.map((item, index) =>
      index === position ? !item : item
    );
    setPacked(updatedArr);
  };

  // this function will delete a particular item
  const deleteItem = (index) => {
    list.splice(index, 1);
    packed.splice(index, 1);
    setList([...list]);
    setPacked([...packed]);
  };

  // this function will delete the whole list
  const clearList = () => {
    setList([]);
    setPacked([]);
  };

  return (
    <section className="flex flex-col gap-3 w-full mt-6 mb-20">
      <div className="flex items-center justify-start gap-6 w-[98%] sm:w-10/12 max-w-[1200px] mx-auto">
        <p className="text-sm sm:text-xl font-medium w-[10%] min-w-[85px] text-center text-white bg-blue-800 p-2 rounded-md">
          Packed
        </p>
        <p className="text-sm sm:text-xl font-medium w-[76%] text-white bg-blue-800 p-2 rounded-md">
          Item
        </p>
        <p className="text-sm sm:text-xl font-medium w-[10%] min-w-[85px] text-center text-white bg-blue-800 p-2 rounded-md">
          Quantity
        </p>
      </div>
      <div className="flex flex-col gap-3 w-[98%] sm:w-10/12 max-w-[1200px] mx-auto">
        {list?.map((item, index) => {
          return (
            <div className="flex items-center justify-start gap-6" key={index}>
              <input
                type="checkbox"
                className="w-[10%] min-w-[85px] h-[20px] rounded-lg"
                onChange={() => handlechange(index)}
              />
              <div className="flex flex-wrap justify-between w-[76%] p-1 sm:p-2 rounded-md bg-white">
                <p className="text-sm sm:text-xl ">{`${item?.item_name
                  .charAt(0)
                  .toUpperCase()}${item?.item_name.slice(
                  1,
                  item?.item_name.length
                )}`}</p>
                <IconContext.Provider value={{ color: "red", size: "1.5em" }}>
                  <button onClick={() => deleteItem(index)}>
                    <MdDelete />
                  </button>
                </IconContext.Provider>
              </div>
              <p className="text-sm sm:text-xl text-center w-[10%] min-w-[85px] rounded-md py-1 sm:py-2 bg-white">
                {item?.no_of_items}
              </p>
            </div>
          );
        })}
      </div>
      {list.length >= 2 && <div className="flex flex-col sm:flex-row gap-4 self-center items-center sm:items-start ">
        <Sort />
        <button
          onClick={clearList}
          className="text-white font-medium bg-blue-700 p-2 w-[165px] sm:w-20 rounded-lg"
        >
          Clear List
        </button>
      </div>}
    </section>
  );
};

export default List;
