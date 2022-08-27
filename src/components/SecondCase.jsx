import React, { useEffect, useMemo, useState } from "react";

export const SecondCase = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");

  const userType = useMemo(
    () => ({
      underAge: age < 18 ? true : false,
      citizen: country === "Nigeria" ? true : false,
    }),
    [age, country]
  );

  useEffect(() => {
    console.count("User type has changed!");
  }, [userType]);

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
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
        value={name}
      />
      <input
        style={{
          padding: 20,
          fontSize: "1.5rem",
          borderRadius: "10%",
        }}
        onChange={(e) => setAge(e.target.value)}
        placeholder="age"
        value={age}
        type="number"
      />
      <select
        style={{
          padding: 20,
          fontSize: "1.5rem",
          borderRadius: "10%",
          width: "50%",
        }}
        onChange={(e) => setCountry(e.target.value)}
        value={country}
      >
        <option value="PL">Nigeria</option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        <option value="PL">PL</option>
      </select>
    </div>
  );
};
