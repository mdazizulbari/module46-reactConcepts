import React, { useRef } from "react";

const UnControlledField = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(emailRef.current.value);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="email" placeholder="email" ref={emailRef} />
        <br />
        <input
          type="password"
          name="password"
          placeholder="pass"
          ref={passwordRef}
          id=""
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UnControlledField;
