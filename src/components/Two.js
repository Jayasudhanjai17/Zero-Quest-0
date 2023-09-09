import React from "react";
const Two = function (props) {
  const redTwo = function () {
    props.setBtn(2);
    if (props.tog === true) {
      alert("You already picked -> Switch ");
    }
    if (props.number <= 1) {
      alert("Out of Stones in Pile");
    } else if (props.number > 1 && !props.tog) {
      props.setPile(props.number - 2);
      props.swap(true);
      console.log("prop num", props.number);
    }

    console.log("two clicked");
  };

  return (
    <div className="d-inline">
      <button onClick={redTwo}>2️⃣</button>
    </div>
  );
};
export default Two;
