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
     
    }

    console.log("two clicked");
  };

  return (
    <div className="d-inline container">
     <button type="button"onClick={redTwo} class="btn btn-outline-warning two">2</button>
    </div>
  );
};
export default Two;
