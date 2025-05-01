import React, { useState } from "react";

const ControlledField = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("secret");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
  };

  const handleNameChange = (event) => {
    setName(event.targe.vale);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordOnChange = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
    if (password.length < 6) {
      setError("Password must be above 6 characters");
    } else setError("");
  };

  return (
    <div>
      <form action={handleSubmit}>
        <input
          type="text"
          required
          name="name"
          defaultValue={name}
          placeholder="Name"
          onChange={handleNameChange}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleEmailChange}
          defaultValue={email}
          required
          id=""
        />
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
