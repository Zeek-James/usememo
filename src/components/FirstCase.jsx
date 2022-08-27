import { useMemo, useState } from "react";

export const FirstCase = () => {
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");

  const expensiveFunction = (n) => {
    console.log("Func Re-rendered");
    let total = 0;

    for (let i = 0; i < n; i++) {
      total = i;
    }
    return total;
  };

  const sum = useMemo(() => expensiveFunction(number), [number]);

  console.log("Component re-rendered");

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
      {" "}
      <input
        style={{
          padding: 20,
          fontSize: "1.5rem",
          borderRadius: "10%",
        }}
        onChange={(e) => setText(e.target.value)}
        placeholder="enter a text"
        value={text}
      />
      <input
        style={{
          padding: 20,
          fontSize: "1.5rem",
          borderRadius: "10%",
        }}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="enter a number"
        value={number}
        type="number"
      />
      <span style={{ fontSize: "2rem" }}>Total: {sum}</span>
    </div>
  );
};
