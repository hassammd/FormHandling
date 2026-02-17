import { useState } from "react";

const MultipleCheckBox = () => {
  //   const [html, setHtml] = useState(true);
  //   const [css, setCss] = useState(true);
  //   const [javaScript, setJavaScript] = useState(true);

  const [languages, setLanguages] = useState({
    html: "",
    css: "",
    javaScript: "",
  });
  console.log("this is html", languages.html);
  console.log("this is css", languages.css);
  console.log("this is javaScript", languages.javaScript);

  const languageHandler = (e) => {
    const { name, checked } = e.target;
    setLanguages({ ...languages, [name]: checked });
  };

  const htmlHandler = (e) => {
    setHtml(e.target.checked);
  };

  const cssHandler = (e) => {
    setCss(e.target.checked);
  };

  const javaScriptHandler = (e) => {
    setJavaScript(e.target.checked);
  };

  return (
    <>
      <h2>Multiple checkbox</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "flex-start",
        }}
      >
        <label htmlFor="html">
          <input
            type="checkbox"
            checked={languages.html}
            name="html"
            id="html"
            onChange={languageHandler}
          />
          Html
        </label>

        {languages.html && <p>HTML clicked</p>}

        <label htmlFor="css">
          <input
            type="checkbox"
            checked={languages.css}
            name="css"
            id="css"
            onClick={languageHandler}
          />
          Css
        </label>
        {languages.css && <p>Css clicked</p>}
        <label htmlFor="js">
          <input
            id="js"
            type="checkbox"
            name="javaScript"
            checked={languages.javaScript}
            onClick={languageHandler}
          />
          JavaScript
        </label>
        {languages.javaScript && <p>JavaScript clicked</p>}
      </div>
    </>
  );
};
export default MultipleCheckBox;
