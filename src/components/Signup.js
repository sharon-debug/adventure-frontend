import {useState} from "react"
import './Signup.css'
import {Link } from 'react-router-dom'




function Signup ({onLogin}) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          password_confirmation: passwordConfirmation,
        })
       
      }) .then((r) => r.json())
      .then(onLogin)
       setUsername("") 
       setEmail("")
       setPassword("")
       setPasswordConfirmation("")
    }
  
    return (
      <div className="signup">
      <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        </div>
       <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
       
        <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        
        <div>
        <label htmlFor="password_confirmation">Confirm Password:</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        </div>
        <div><Link to="/"> <button type="submit">Submit</button></Link></div>
       
       
      </form>
      </div>
    );
  }
   
  export default Signup;