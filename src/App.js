import { useState } from "react";
import "./App.css";
import 'react-phone-number-input/style.css';
import PhoneInput from "react-phone-number-input";
function App() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [gender,setGender] = useState("")
  const [phone,setPhone] = useState("");
  const [password,setPassword] = useState("")
  const handleChange = (e)=>{
    const val = e.target.value;
    switch (e.target.name){
      case "name" :
        setName(val);
        break;
      case "email":
        setEmail(val);
        break;
      case "gender":
        setGender(val);
        break;
      case "password":
        setPassword(val);
        break;
      default:
        alert("Error")
      
    }
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    alert("hello"+name);
  }
  return (
    <>
      <div>
        <form>
          <div>
          <input type="text" placeholder="Name" required={true} name="name" value={name} onChange={handleChange}></input>
          </div>
          <div>
          <input type="email" placeholder="Email" name="email" value={email} onChange={handleChange} required={true}></input>
          </div>
          <div>
            <select name="gender" value={gender} onChange={handleChange}>
              <option value="">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          {/* <div>
            <input type="text" name="phone" onChange={handleChange} value={phone} placeholder="PhoneNumber"/>
          </div> */}
          <PhoneInput
          className="phone-number"
              placeholder="phone number"
              value={phone}
              onChange={setPhone} name="phone"/>
              
          <div>
            <input type="password" name="password" onChange={handleChange} value={password} placeholder="Password"/>
          </div>
        </form>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </> 
  );
}

export default App;
