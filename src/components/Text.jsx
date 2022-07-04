import React from "react";

const Text = ({ user, count }) => {
  console.log(`Text Component renders - ${user}`);

  return (
    <>
      <div>
        <span>{user} </span>
        <span>{count}</span>
      </div>
    </>
  );
};

export default React.memo(Text);
