import React from "react";
const Header = function () {
  let GameName = <h1>💥Zero-Quest💥</h1>;
  let WelComemsg = <h1> Welcome User 🫰✅</h1>;
  let GameWin = <h1>Won by Player </h1>;
  let [win, setWin] = React.useState(false);
  return (
    <div className="Header">
      {GameName}
      {win ? GameWin : WelComemsg}
    </div>
  );
};
export default Header;
