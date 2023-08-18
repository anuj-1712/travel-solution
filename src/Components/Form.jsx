import React, { useContext } from "react";
import { Context } from "../ContextApi/contextapi";

const Form = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const { item, setItem, itemsReq, setItemsReq, setList, setPacked } =
    useContext(Context);
  
  // this function will add the item name and quantity in the list arr with its packed status which is by default is set as false
  const addItem = (e) => {
    e.preventDefault();
    if (!item) return;
    else {
      setList((arr) => {
        return [
          ...arr,
          {
            no_of_items: itemsReq,
            item_name: item,
          },
        ];
      });
      setPacked((arr) => {
        return [...arr, false];
      });
      setItem("");
      setItemsReq("1");
    }
  };
  return (
    <section className="flex flex-col sm:flex-row items-center justify-center gap-3 h-[80px] sm:h-[50px] w-full bg-blue-800">
      <p className="text-white font-medium text-xl">What do you need for trip?</p>
      <form className="flex items-center gap-4 sm:w-1/4 sm:min-w-[300px]">
        <select
          className="outline-none bg-sky-300 text-white font-medium rounded-xl border-0 w-[40px]"
          onChange={(e) => setItemsReq(e.target.value)}
          value={itemsReq}
        >
          {numbers.map((num, index) => {
            return <option key={index}>{num}</option>;
          })}
        </select>
        <input
          type="text"
          className="outline-none bg-sky-300 text-white font-medium rounded-xl border-0 w-2/3 px-4 min-w-[150px]"
          onChange={(e) => setItem(e.target.value)}
          value={item}
        />
        <button
          className="bg-white text-blue-500 font-bold rounded-xl border-0 px-4"
          onClick={addItem}
        >
          Add
        </button>
      </form>
    </section>
  );
};

export default Form;
