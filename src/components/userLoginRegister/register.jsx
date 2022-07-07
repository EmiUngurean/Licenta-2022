
import Button from "react-bootstrap/Button";
import React, {useState,setState} from 'react';

import {database} from '../../firebase'
import {ref,push,child,update} from "firebase/database";


function Register() {


    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }

    const handleSubmit = () =>{
        console.log(firstName,lastName,email,password,confirmPassword);
        let obj = {
                firstName : firstName,
                lastName:lastName,
                email:email,
                password:password,
                confirmPassword:confirmPassword,
            }       
        const newPostKey = push(child(ref(database), 'posts')).key;
        const updates = {};
        updates['/' + newPostKey] = obj
        return update(ref(database), updates);
    }
  return (
            
    <div className='register'>
    <div className="form2">
          <div className="form2-body">
                <h3>Creare cont</h3>
              <div className="username">               
               <input className="form2__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="Nume"/>
              </div>
              <div className="lastname">
               <input  type="text" name="" id="lastName" value={lastName}  className="form2__input" onChange = {(e) => handleInputChange(e)} placeholder="Prenume"/>
              </div>
              <div className="email">
              <input  type="email" id="email" className="form2__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
              </div>
              <div className="password">
              <input className="form2__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Parolă"/>
              </div>
              <div className="confirm-password">
              <input className="form2__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirmare parolă"/>
              </div>
          </div>
          <Button onClick={()=>handleSubmit()} style={{backgroundColor: '#192041'}} className="registerBtn" type="submit"> Înregistrare </Button>         
      </div>
      </div>      
  )
}

export default Register