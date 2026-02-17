import { useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const ClearHandler = () => {
    setData({
      name: "",
      email: "",
      phone: "",
    });
  };

  return (
    <>
      <h1> Form</h1>

      <h4>{data.name}</h4>
      <h2>{data.email}</h2>
      <h2>{data.phone}</h2>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={data.name}
        name="name"
        onChange={inputHandler}
      />
      <input
        type="text"
        placeholder="Enter Your Email"
        value={data.email}
        name="email"
        onChange={inputHandler}
      />
      <input
        type="number"
        value={data.phone}
        name="phone"
        placeholder="Phone Number"
        onChange={inputHandler}
      />
      <button onClick={ClearHandler}>Clear</button>
    </>
  );
};

export default Form;
