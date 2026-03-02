import { useState } from "react";

const SelectAll = () => {
  const [html, setHtml] = useState();
  const [css, setCss] = useState();
  const [js, setJs] = useState();

  const htmlHandler = (e) => {
    setHtml(e.target.checkeds);
  };

  return (
    <>
      <h3>This is Select ALl </h3>
      <div style={{ display: "flex", gap: "10px" }}>
        <label htmlFor="">
          <input type="checkbox" />
          HTMl
        </label>
        <label htmlFor="">
          <input type="checkbox" />
          Css
        </label>
        <label htmlFor="">
          <input type="checkbox" />
          JavaScript
        </label>
      </div>
    </>
  );
};
export default SelectAll;
