import { useState } from "react";

const FormHandler = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [phone, setPhone] = useState("");

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  //   const nameHanlder = (e) => {
  //     setName(e.target.value);
  //   };

  //   const emailHandler = (e) => {
  //     setEmail(e.target.value);
  //   };

  //   const phoneHanlder = (e) => {
  //     setPhone(e.target.value);
  //   };

  const formHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(e);
  };
  const clearHandler = () => {
    setData({
      name: "",
      email: "",
      phone: "",
    });
  };
  return (
    <>
      <h2>This is form Handling page</h2>

      <input
        type="text"
        value={data.name}
        name="name"
        placeholder="Enter Your Name"
        onChange={formHandler}
      />
      <input
        type="text"
        value={data.email}
        name="email"
        placeholder="Enter your Email"
        onChange={formHandler}
      />
      <input
        type="number"
        name="phone"
        value={data.phone}
        placeholder="Enter your Phone"
        onChange={formHandler}
      />
      <br></br>
      <button onClick={clearHandler}>Clear</button>

      <h3>Name: {data.name}</h3>
      <h3>Email: {data.email}</h3>
      <h3>Phone:{data.phone}</h3>
    </>
  );
};

export default FormHandler;
