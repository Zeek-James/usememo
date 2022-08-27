import React, { useState } from "react";
import { ExpensiveComponent } from "./ExpensiveComponent";

export const ThirdCase = () => {
  const [text, setText] = useState("");

  console.log("Component re-renderd!");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 20,
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <input
        style={{
          padding: 20,
          fontSize: "1.5rem",
          borderRadius: "10%",
        }}
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="enter a text"
        value={text}
      />

      <ExpensiveComponent />
    </div>
  );
};
