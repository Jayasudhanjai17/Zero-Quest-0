import React from "react";
const Two = function (props) {
  let num = props.number;
  let cur = props.cur;
  let nowin = false;
  const redTwo = function () {
    props.setBtn(2);
    // if (num === 0) {
    //   alert(` ${cur} Wins the Game `);
    //   // const winner= cur==='Player1'?'Player2':'Player1';
    //   nowin = true;
    //   props.setChamp(true);
    //   // props.win();
    //   // alert(` ${cur} Wins the Game `)
    // }

    if (props.number <= 1) {
      alert("Out of Stones in Pile");
    } else if (props.number > 1) {
      props.setPile(props.number - 2);
      console.log("prop num", props.number);
      
    }
  };
  // if(num===0){
  //   // const winner= cur==='Player1'?'Player2':'Player1';
  //   nowin=true;
  //      props.setChamp(true);
  //     // props.win();
  //   // alert(` ${cur} Wins the Game `)
  // }

  return (
    <div className="d-inline" onClick={() => props.call()}>
      <button onClick={redTwo}>2️⃣</button>
    </div>
  );
};
export default Two;
