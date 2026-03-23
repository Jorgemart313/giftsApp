import { useState } from "react";

//here i could change the initial number
export const useCounter = (initialValue: number = 5) => {
  const [counter, setCounter] = useState(initialValue);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubstract = () => {
    setCounter(counter - 1);
    if (counter === 1) {
      return setCounter(1);
    }
  };

  const handleReset = () => {
    setCounter(5);
  };

  return {
    //properties
    counter,
    //Methods
    handleAdd,
    handleSubstract,
    handleReset,
  };
};
