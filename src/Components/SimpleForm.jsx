import React from "react";

const SimpleForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.name.value);
  };

  return (
    <div>
      <form className="flex flex-col mt-10 -space-y-3" action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="input"
          placeholder="Type here"
        />
        <br />
        <input type="email" name="email" id="" placeholder="Enter Email" className="input" />
        <br />
        <button className="btn btn-accent join-item">Submit</button>
      </form>
    </div>
  );
};

export default SimpleForm;
