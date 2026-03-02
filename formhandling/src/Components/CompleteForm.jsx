// import { useState } from "react";

import { useState } from "react";

// const CompleteForm = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState();
//   const [js, setJs] = useState(false);
//   const [php, setPhp] = useState(false);

//   const nameHandler = (e) => {
//     setName(e.target.value);
//   };
//   const emailHanlder = (e) => {
//     setEmail(e.target.value);
//   };
//   const phoneHandler = (e) => {
//     setEmail(e.target.value);
//   };

//   const jsHandler = (e) => {
//     setJs(e.target.checked);
//   };
//   const phpHandler = (e) => {
//     setPhp(e.target.checked);
//   };
//   return (
//     <>
//       <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
//         <label htmlFor="">
//           Name
//           <input
//             type="text"
//             value={name}
//             placeholder="Name"
//             onChange={nameHandler}
//           />
//         </label>
//         <label htmlFor="">
//           Email
//           <input
//             type="text"
//             value={email}
//             placeholder="Email"
//             onChange={emailHanlder}
//           />
//         </label>
//         <label htmlFor="">
//           Phone
//           <input
//             type="text"
//             value={phone}
//             placeholder="Phone"
//             onChange={phoneHandler}
//           />
//         </label>
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             gap: "10px",
//           }}
//         >
//           <label htmlFor="">
//             <input type="checkbox" checked={js} onChange={jsHandler} />
//             js
//           </label>
//           <label htmlFor="">
//             <input type="checkbox" checked={phone} onChange={phpHandler} />
//             Php
//           </label>
//         </div>
//       </div>

//       <h4>Name: {name}</h4>
//       <h4>Email: {email}</h4>
//       <h4>Phone: {phone}</h4>
//       <h4>js: {js}</h4>
//       <h4>Php: {php}</h4>
//     </>
//   );
// };

// export default CompleteForm;

const CompleteForm = () => {
  const [isSkillSet, setIsSkillSet] = useState(["js", "php"]);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    skill: isSkillSet.reduce((acc, current) => {
      return { ...acc, [current]: false };
    }, {}),
  });

  const [showData, setShowData] = useState(false);
  const isSelectAll = isSkillSet.every(Boolean);

  const formHandler = (e) => {
    const { name, value, type, checked } = e.target;

    setData({ ...data, [name]: type === "checkbox" ? checked : value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowData(true);
  };

  const allCheckedHandler = (e) => {
    const isChecked = e.target.checked;
    setData({ ...data, js: isChecked, php: isChecked });
  };
  return (
    <>
      <h2>this is Complete Form</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="">
            Name
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              value={data.name}
              onChange={formHandler}
            />
          </label>
          <label htmlFor="">
            Email
            <input
              type="text"
              name="email"
              value={data.email}
              id=""
              placeholder="Enter Your Email"
              onChange={formHandler}
            />
          </label>

          <label htmlFor="">
            Phone
            <input
              type="number"
              name="phone"
              value={data.phone}
              placeholder="Enter Your Phone"
              onChange={formHandler}
            />
          </label>
          <label htmlFor="">
            <input
              type="checkbox"
              checked={isSelectAll}
              name="php"
              onChange={allCheckedHandler}
            />
            Selec All
          </label>
          <label>
            <input
              type="checkbox"
              checked={data.js}
              name="js"
              onChange={formHandler}
            />
            Js
          </label>
          <label htmlFor="">
            <input
              type="checkbox"
              checked={data.php}
              name="php"
              onChange={formHandler}
            />
            Php
          </label>
          <input type="submit" />
        </form>
      </div>
      {showData
        ? Object.entries(data).map(([key, vlue]) => {
            return (
              <div>
                <p>
                  {key}: {vlue.toString()}
                </p>
              </div>
            );
          })
        : ""}
    </>
  );
};
export default CompleteForm;
