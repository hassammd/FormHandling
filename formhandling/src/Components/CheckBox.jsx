import { useState } from "react";

const CheckBox = () => {
  const [languages, setLanguages] = useState({
    html: false,
    css: false,
    react: false,
  });

  const onChangeHandler = (e) => {
    const { name, checked } = e.target;
    setLanguages({ ...languages, [name]: checked });
  };

  const selectAll = Object.values(languages).every((items) => {
    return items === true;
  });

  const selectAllHandler = (e) => {
    setLanguages({
      html: e.target.checked,
      css: e.target.checked,
      react: e.target.checked,
    });
  };

  return (
    <>
      <h2>THis is CheckBox</h2>

      <label htmlFor="">
        <input
          type="checkbox"
          name="html"
          checked={selectAll}
          onChange={selectAllHandler}
        />
        Select All
      </label>
      <br></br>
      <br></br>

      <label htmlFor="">
        <input
          type="checkbox"
          checked={languages.html}
          name="html"
          onChange={onChangeHandler}
        />
        html
      </label>
      <label htmlFor="">
        <input
          type="checkbox"
          name="css"
          checked={languages.css}
          onChange={onChangeHandler}
        />
        Css
      </label>
      <label htmlFor="">
        <input
          type="checkbox"
          name="react"
          checked={languages.react}
          onChange={onChangeHandler}
        />
        React
      </label>

      {languages.html && <h4>Html checked</h4>}
      {languages.css && <h4>Css checked</h4>}
      {languages.react && <h4>React checked</h4>}
    </>
  );
};

export default CheckBox;
