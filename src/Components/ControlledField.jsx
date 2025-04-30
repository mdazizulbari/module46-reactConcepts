import React, { useState } from "react";

const ControlledField = () => {
  const [password, setPassword] = useState("secret");
  const [error, setError] = useState("");
  const handlePasswordOnChange = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
    if (password.length < 6) {
      setError("Password must be above 6 characters");
    } else setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submited");
  };

  return (
    <div>
      <form action={handleSubmit}>
        <input type="email" name="email" required id="" />
        <br />
        <input
          type="password"
          name="password"
          required
          defaultValue={password}
          id=""
          onChange={handlePasswordOnChange}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
};

export default ControlledField;
