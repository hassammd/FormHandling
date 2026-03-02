import { useState } from "react";

const Form = () => {
  const [fromData, setFormData] = useState({
    name: "",
    tc: false,
  });

  const [showData, setShowData] = useState(false);

  const onChnageHandler = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({ ...fromData, [name]: type === "checkbox" ? checked : value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (fromData.name !== "" && fromData.tc === true) {
      setShowData(true);
    }
  };

  return (
    <>
      <h2>Form</h2>

      <form action="" onSubmit={submitHandler}>
        <label htmlFor="">
          Name
          <input
            type="text"
            name="name"
            id=""
            placeholder="Enter your Name"
            onChange={onChnageHandler}
          />
        </label>
        <label htmlFor="">
          <input
            type="checkbox"
            name="tc"
            id=""
            checked={fromData.tc}
            placeholder="Enter your Name"
            onChange={onChnageHandler}
          />
          Term and Conditions
        </label>
        <br></br>
        <input type="submit" />
      </form>

      {showData && <h4>Name: {fromData.name}</h4>}
      {showData && <h4>Term and Conditions Accepted</h4>}
    </>
  );
};

export default Form;
