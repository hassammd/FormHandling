import { useState } from "react";

const SelectAllCheckBoxes = () => {
  const languages = ["Js", "React"];

  const [data, setData] = useState({
    skills: languages.reduce((acc, current) => {
      return { ...acc, [current]: false };
    }, {}),
  });

  //select All
  const isSelectAll = Object.values(data.skills).every(Boolean);
  console.log("This is select All", isSelectAll);
  const onChangeHandler = (e) => {
    const { name, checked } = e.target;
    setData({ ...data, skills: { ...data.skills, [name]: checked } });
  };

  //submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("This is data", data);
  };
  return (
    <>
      <h3>This is form</h3>
      <form
        action=""
        onSubmit={submitHandler}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label>
          <input type="checkbox" onChange={onChangeHandler} />
          Select All
        </label>
        <label>
          <input
            type="checkbox"
            name="Js"
            checked={data.skills.Js}
            onChange={onChangeHandler}
          />
          Js
        </label>
        <label>
          <input
            type="checkbox"
            name="React"
            checked={data.skills.React}
            onChange={onChangeHandler}
          />
          React
        </label>
        <input type="submit" />
      </form>
    </>
  );
};

export default SelectAllCheckBoxes;
