import React, { useState } from "react";
import "./Form.css";

function Form() {

 const [enteredFirstName, setEnteredFirstName] = useState('');
 const [enteredLastName, setLastName] = useState('');
 const [enteredEmailAddress, setEmailAddress] = useState('');
 const [enterdPassword, setPassword] = useState('')
 
 const firstHandler = (event) =>{
   setEnteredFirstName(event.target.value);
 }

 const lastHandler = (event) =>{
  setLastName(event.target.value);
}

const emailHandler = (event) =>{
  setEmailAddress(event.target.value);
}

const passwordHandler = (event) =>{
  setPassword(event.target.value);
}

const submitHandler = (event) => {
  Event.preventDefault();


const updatedForm = {
  firstName: "enterdFirstName",
  lastName: "enteredLastName",
  email: "enterdedEmailAddress",
  Password: "enterdPassword",
};

console.log(updatedForm);
setEnteredFirstName("");
setLastName("");
setEmailAddress("");
setPassword("");

}

  return (
    <div className="form-container">
      <div className="learning">
        <div> 
          
        <h3 className="learn"> Learn to code by 
        <br/>
        watching others </h3>
        <p className="code">
        
          See how experienced developers solve problems in real-time. 
          <br/>
          Watching scripted tutorials is great, but understanding how 
          <br/>
          developers think is
          invaluable.
        </p>
        </div>
        <div className="left">
        <div className="discription"> 
        <h2> Try it Free 7 days then $20/mo.thereafter  </h2>
        </div>

        
          <form onSubmit={submitHandler}>
            <div className="sign-in">
              <input type="text" value={enteredFirstName}placeholder="First Name"  id="First Name"  onChange={firstHandler} required/>

            </div>
            <div className="sign-in">
              <input type="text" value={enteredLastName}placeholder="Last Name"  id="Last Name" onChange={lastHandler}/>

            </div>
            <div className="sign-in">
              <label></label>
              <input type="email" value={enteredEmailAddress}placeholder="Email Address"  id="Email Address" onChange={emailHandler} />

            </div>
            <div className="sign-in">
              <input type="password" value={enterdPassword}placeholder="Password"  id="Password" onChange={passwordHandler}/>

            </div>
            <div className="button">
              <button type="submit">Clam Your Free Trial</button>
              <p className="term"> By clicking the button, you are agreeing to our <strong>Terms and Services</strong></p>
            </div>
          <div />
        </form>
            
        </div>
      </div>
      </div>
  );
}

export default Form;
