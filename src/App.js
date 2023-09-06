import logo from "./logo.svg";
import "./App.css";

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Player1 from "./components/Player1";
import Player2 from "./components/Player2";
import One from "./components/One";
import Two from "./components/Two";
import Three from "./components/Three";
//Reset Button Or New Game Button

function App() {
  //---------------------------STATES -------------------------------------------
  let [pile, setPile] = React.useState(20); //Pile odf stone
  let [curPlayer, setCurPlayer] = React.useState("Player1"); //For deciding winer
  //----------------------------Hidden to disable buttoons--------------------------
  let [allow1, setAllow1] = React.useState(true);
  let [champ, setChamp] = React.useState(false);
  let [btn, setBtn] = React.useState(0);

  // const switchPlayer = () => {
  //   setcurrentPlayer(currentPlayer === "Player1" ? "Player2" : "Player1");
  // };
  console.log(btn);

  //NOTE -----------------------------Toggele State For the Current Player UI----------------------------
  const call = function () {
    // setAllow1((prev) => pile<3? prev: !prev);
    setAllow1((prev) => (pile > btn ? !prev : prev));

    console.log("switch happens", allow1);
    if (pile > btn) {
      setCurPlayer(curPlayer === "Player1" ? "Player2" : "Player1");
    }
    console.log(curPlayer);
    // console.log("allow1 insise call",allow1);
  };
  // NOTE-----------------------------------  &&pile>3 && pile>2 && pile!=0  ?  Style to dissappear-------------------------------------
  // let curval=(two===2)?2:3;

  const styles = {
    display: allow1 ? "flex" : "none",
  };
  const styles2 = {
    display: allow1 ? "none" : "flex",
  };
  // NOTE------------------------------Current player Style--------------------------------------------
  const stylpr1 = {
    backgroundColor: allow1 ? "rgba(255, 255, 255, 0.4)" : "",
  };
  const stylpr2 = {
    backgroundColor: allow1 ? "" : "rgba(255, 255, 255, 0.4)",
  };

  //NOTE ---------------------------Winning State For a Player----------------------------------------------

  let introState = <h1>PILE:{pile}💰</h1>;
  // let winstate=<h1>GameWon by {curPlayer}</h1>
  // if (pile === 0) {
  //   champ=true;
  // setCurPlayer(curPlayer === "Player1" ? "Player2" : "Player1");
  // }
  useEffect(() => {
    if (pile === 0) {
      // Declare the current player as the winner
      setChamp(true);
      // setCurPlayer(curPlayer === "Player1" ? "Player2" : "Player1");
    }
  }, [pile]);

  let winstate = <h1>GameWon by {curPlayer}</h1>;
  // console.log(pile);
  return (
    <div className="App">
      <Header></Header>
      <div className="MainCon">
        {champ ? winstate : introState}

        <div className="row">
          <div className="col-6 Player1 " style={stylpr1}>
            <Player1></Player1>

            <div style={styles}>
              <div className="p1">
                <One
                  call={call}
                  number={pile}
                  setPile={setPile}
                  cur={curPlayer}
                  switch={setCurPlayer}
                  allow1={allow1}
                  setChamp={setChamp}
                  setBtn={setBtn}
                ></One>
                <Two
                  call={call}
                  number={pile}
                  setPile={setPile}
                  cur={curPlayer}
                  switch={setCurPlayer}
                  allow1={allow1}
                  setAllow1={setAllow1}
                  setChamp={setChamp}
                  setBtn={setBtn}
                ></Two>
                <Three
                  call={call}
                  number={pile}
                  setPile={setPile}
                  cur={curPlayer}
                  switch={setCurPlayer}
                  allow1={allow1}
                  setAllow1={setAllow1}
                  setChamp={setChamp}
                  setBtn={setBtn}
                ></Three>
              </div>
            </div>
          </div>

          <div className="col-6 Player2" style={stylpr2}>
            <Player2></Player2>
            <div style={styles2}>
              <div className="p2">
                <One
                  call={call}
                  number={pile}
                  setPile={setPile}
                  cur={curPlayer}
                  switch={setCurPlayer}
                  allow1={allow1}
                  setAllow1={setAllow1}
                  setChamp={setChamp}
                  setBtn={setBtn}
                  champ={champ}
                ></One>
                <Two
                  call={call}
                  number={pile}
                  setPile={setPile}
                  cur={curPlayer}
                  switch={setCurPlayer}
                  allow1={allow1}
                  setAllow1={setAllow1}
                  setChamp={setChamp}
                  champ={champ}
                  setBtn={setBtn}
                ></Two>
                <Three
                  call={call}
                  number={pile}
                  setPile={setPile}
                  cur={curPlayer}
                  switch={setCurPlayer}
                  allow1={allow1}
                  setAllow1={setAllow1}
                  setChamp={setChamp}
                  champ={champ}
                  setBtn={setBtn}
                ></Three>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
