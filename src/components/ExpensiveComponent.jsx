import React from "react";

export const ExpensiveComponent = React.memo(() => {
  console.log("Expensive component rendered!");

  let total = 0;

  for (let i = 0; i < 1000000000; i++) {
    total += i;
  }

  return <div>ExpensiveComponent</div>;
});
