import React from "react";

const Button = ({ children, handleClick }) => {
  console.log(`Button Component Renders - ${children} `);

  return (
    <>
      <div>
        <button onClick={handleClick}>{children}</button>
      </div>
    </>
  );
};

export default React.memo(Button);
