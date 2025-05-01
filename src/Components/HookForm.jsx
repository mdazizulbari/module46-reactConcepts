import React from "react";
import useInputField from "../hooks/useInputField";

const HookForm = () => {
  const [name, nameOnChange] = useInputField("");
  const [email, emailOnChange] = useInputField("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit", name, email);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          defaultValue={name}
          placeholder="name"
          onChange={nameOnChange}
          type="text"
        />
        <br />
        <input type="email" name="email" placeholder="email" id="" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
