import React from "react";

const One = function (props) {
  let num = props.number; //pile

  const redOne = function () {
    if (props.tog === true) {
      alert("You already picked -> Switch ");
    }

    if (num > 0 && !props.tog) {
      props.setBtn(1);
      //--------------------Deduction------------------------------------

      props.setPile(num - 1);
      props.swap(true);

      console.log("one clicked");
    }
  };

  return (
    <div className="d-inline container">
    <button type="button"onClick={redOne}  class="btn btn-outline-danger one">1</button>
    </div>
  );
};

export default One;
