import { useState } from "react";

const CheckBox = () => {
  const [isChecked, setIsChecked] = useState(true);
  console.log("checkbox checked", isChecked);

  const checkboxHandler = (e) => {
    setIsChecked(e.target.checked);
  };
  return (
    <>
      <h2> Checkbox</h2>

      <label htmlFor="cb">
        <input
          type="checkbox"
          id="cb"
          checked={isChecked}
          onChange={checkboxHandler}
        />
        Terms and Conditions
      </label>
    </>
  );
};
export default CheckBox;
