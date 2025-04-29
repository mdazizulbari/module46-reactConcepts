import React, { useState } from "react";

const ControlledField = () => {
  const [password, setPassword] = useState("secret");
  const handlePasswordOnChange = (event) => {
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submited");
  };

  return (
    <div>
      <form action={handleSubmit}>
        <input type="email" name="email" required id="" />
      </form>
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
    </div>
  );
};

export default ControlledField;
