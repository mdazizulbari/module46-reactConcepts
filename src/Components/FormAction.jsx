import React from "react";

const FormAction = () => {
  const handleFromAction = (formData) => {
    console.log(formData.get("name"));
    console.log(formData.get("email"));
  };
  return (
    <div>
      <form
        action={handleFromAction}
        className="flex flex-col -space-y-3 mt-10"
      >
        <input className="input" type="text" placeholder="name" name="name" />
        <br />
        <input className="input" type="email" name="email" id="" />
        <br />
        <input className="bg-green-400" type="submit" />
      </form>
    </div>
  );
};

export default FormAction;
