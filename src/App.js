import "./App.css";
import { useState } from "react";

function App() {
  
  // for controlled inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [details, setDetails] = useState([]);

  // for submitting form
  function submitHandler(e) {
    e.preventDefault();
    setDetails([...details, { name: name, email: email, password: password }]);

    // console.log(name, email, password);
    // to refresh after writing
    setName("");
    setEmail("");
    setPassword("");
  }

  // function userHandlder(e){
  //   let item = e.target.value;
  //   if(item.value<3)
  //   {
  //     console.warn("invalid")
  //   }
  //   console.warn(e.target.value.length)
  // }


 
  return (
    <div className="container">
      <div className="form_outer_box">
        <form className="form" onSubmit={submitHandler}>
          <label className="label">Username:</label>
          <input
            type="text"
            value={name}
            placeholder="Username"
            className="input_type"
            onChange={(e) => setName(e.target.value)}
          />

          <label className="label">Email:</label>
          <input
            type="text"
            placeholder="Email"
            className="input_type"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="label">Password:</label>
          <input
            type="password"
            placeholder="Password"
            className="input_type"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="btn">
            SUBMIT
          </button>
        </form>
      </div>
      <div className="details_flex_box">
        {details.map((item) => {
          return (
            <div>
              <p className="para">{item.name}</p>
              <p className="para">{item.email}</p>
              <p className="para">{item.password}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
