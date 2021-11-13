import React, { useState } from "react";

function SummaryPage(props) {
  const [checked, setChecked] = useState(false);
  const fnCheckedChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <>
      <form>
        <input
          type="checkbox"
          checked={checked}
          id={"confirm-checkbox"}
          onChange={fnCheckedChange}
        />
        <label htmlFor={"confirm-checkbox"}>
          주문하려는 것을 확인하셨나요?
        </label>
        <br />
        <button disabled={!checked} type={"submit"}>
          주문 확인
        </button>
      </form>
    </>
  );
}

export default SummaryPage;
