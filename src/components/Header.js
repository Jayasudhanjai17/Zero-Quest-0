import React from "react";
const Header = function () {
  let GameName = <h1>💥Zero-Quest💥</h1>;
  let WelComemsg = <h1> Welcome User 🫰✅</h1>;
  
  return (
    <div className="Header">
      {GameName}
      { WelComemsg}
    </div>
  );
};
export default Header;
