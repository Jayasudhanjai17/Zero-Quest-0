import React from "react";
const Three = function (props) {
  const redThree = function () {
    if (props.tog === true) {
      alert("You already picked -> Switch ");
    }
    if (props.number <= 2) {
      alert("Out of Stones in Pile");
    } else if (props.number > 0 && !props.tog) {
     
      props.setBtn(3);
      props.setPile(props.number - 3);
      props.swap (true);
    }
    props.setBtn(3);
  };
  return (
    <div className="d-inline container">
     <button type="button" onClick={redThree}  class="btn btn-outline-success three">3</button>
    </div>
  );
};
export default Three;
