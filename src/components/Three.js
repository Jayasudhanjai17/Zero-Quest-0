import React from "react";
const Three = function (props) {
  let num = props.number;
  let cur = props.cur;
  let nowin = false;
  const redThree = function () {
    // props.setBtn(3);
    // if (num === 0) {
    //   // const winner= cur==='Player1'?'Player2':'Player1';
    //   nowin = true;
    //   props.setChamp(true);
    //   // props.win();
    //   // alert(` ${cur} Wins the Game `)
    // } else if (nowin === false) {
    if (props.number <= 2) {
      alert("Out of Stones in Pile");
    } else if (props.number > 0) {
      props.setPile(props.number - 3);
      // props.switch(cur === "Player1" ? "Player2" : "Player1");
      //onClick={() => props.call()}
    }
    props.setBtn(3);
  };
  return (
    <div className="d-inline" onClick={redThree}>
      <button onClick={() => props.call()}>3️⃣</button>
    </div>
  );
};
export default Three;
