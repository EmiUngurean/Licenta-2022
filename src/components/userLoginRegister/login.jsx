import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Register from "./register";


export default function Login() {
  return (

    <div className="Login">
      <div className="container">
       <div className="form1">
          <div className="form1-body">
            <h3>Conectare</h3>

           <div className="email">               
                  <input   type="email" id="email" className="form1__input" placeholder="Introduceți email-ul"/>
              </div>
              <div className="password">
                  <input className="form1__input" type="password"  id="password" placeholder="Introduceți parola"/>
              </div>
              <div className="btnConectare">
                <Button style={{backgroundColor: '#192041'}} className="loginBtn"> Conectare </Button>
                <p className="pLogin">Nu ai cont? <a href="/register">Înregistrează-te</a></p>
              </div>
            </div> 
         </div>
      </div> 
    </div>
  );
}
 
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // function validateForm() {
  //   return email.length > 0 && password.length > 0;
  // }

  // function handleSubmit(event) {
  //   event.preventDefault();
  // }


    {/* <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email"> <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"  
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Introduceți email-ul"
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password"> <Form.Label>Parolă</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Introduceți parola"
          />
        </Form.Group> */}
         {/* </Form> */}