// import React from "react";
// const One = function (props) {
//   console.log(props);
//   let num = props.number;
//   // console.log(num);
//   let cur = props.cur;
//   // console.log(cur);
//   let nowin = false;
//   const redOne = function () {
//     console.log('before if',num);

//     if (nowin === false) {
//       if (props.number > 0) {
//         //--------------------Deduction------------------------------------
//         console.log(num,'beforered');
//         props.setPile(props.number - 1);
//         //------------------------switchPlayer------------------------------
//         console.log('after red',nowin,num);
//         if(num===0){
//           nowin=true;
//           return null;
//         }
// else if(nowin===false){
//         props.switch(cur === "Player1" ? "Player2" : "Player1");
//         console.log('nowin',nowin);
//       }
//     }
//     }
//   };

//   // if(num===0){
//   //   // const winner= cur==='Player1'?'Player2':'Player1';
//   //   nowin=true;
//   //      props.setChamp(true);
//   //     // props.win();
//   //   alert(` ${cur} Wins the Game `)
//   // }

//   return (
//     <div className="d-inline" onClick={() => props.call()}>
//       <button onClick={redOne}>1️⃣</button>
//     </div>
//   );
// };
// export default One;
import React from "react";

const One = function (props) {
  // console.log(props);
  let num = props.number;//pile
 
 

  const redOne = function () {
    // props.setBtn(1);
    // console.log("before if", num);

    // if (nowin === false) {
      if (num > 0) {
        //--------------------Deduction------------------------------------
        // console.log(num, "before red");
        props.setPile(num - 1);
        //------------------------switchPlayer------------------------------
     
        // props.switch(cur === "Player1" ? "Player2" : "Player1");
        // console.log("nowin", nowin);
      // } else {
      //   nowin = true;
      //   // console.log("nowin", nowin);
      // }
    }
    props.setBtn(1);
  };

  // ...onClick={redOne}
  return (
    <div className="d-inline" onClick={redOne}>
      <button onClick={() => props.call()}>1️⃣</button>
    </div>
  );
};

export default One;
