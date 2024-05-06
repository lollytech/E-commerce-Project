import React, { useState } from "react";
import "./Signup.css"


const Signup = () => {
    const [username, setusername] = useState("");
    const [pin, setpin] = useState("");
    const [error, seterror] = useState("");
  
    const handlesubmit = (event) => {
      event.preventDefault();
    };
  
    const valuehandler = (event) => {
      // console.log(event);
      setusername(event.target.value);
      console.log(event.target.value);
    };
  
    return (
      <div>
        <form onSubmit={handlesubmit} className="sign-up-form" action="">
          <label>
            Username
            <input className="inputs" type="text" value={username} onChange={valuehandler} />
          </label>
          <label>
            Email
            <input className="inputs"
            type="email" name="" id="" />
          </label>
          <label>
            Password
            <input className="inputs"
              type="text"
              value={pin}
              onChange={(event) => setpin(event.target.value)}
            />
          </label>
          <br />
          <button className="signupbtn" type="submit">
            Signup
          </button>
          <div className="error">{error && <div>{error}</div>}</div>
        </form>
      </div>
    )
};



export default Signup;
