import React, { useState, useCallback } from "react";
import Text from "./Text";
import Button from "./Button";
const Parent = () => {
  console.log("Parent Component Renders");
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(100);

  const handleCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  const handleValue = useCallback(() => {
    setValue(value + 100);
  }, [value]);
  return (
    <>
      <div>
        <p> This is example of useCallback demo</p>
        <Text user="Rushabh" count={count} />
        <Button handleClick={handleCount}> count for Rushabh </Button>
        <Text user="Anonymous" count={value} />
        <Button handleClick={handleValue}> count for Anonymous </Button>
      </div>
    </>
  );
};

export default Parent;
