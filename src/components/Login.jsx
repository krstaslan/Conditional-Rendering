import React from "react";
import Input from "./Input";
const time = new Date().getHours();
function Loggin(props) {
  return (
    <form className="form">
      {time > 17 ? <h3> Good Afternoon </h3> : <h3> Good Morning </h3>}
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}
export default Loggin;
