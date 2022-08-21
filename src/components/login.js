import React, { useState, useEffect} from 'react';
// import Forgot from './components/forgot'
// export default class Login extends Component {
//   render() { 
  
    //Test
  function App() {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // if (!values.username) {
    //   errors.username = "Username is required!";
    // }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/;
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be more than 8 characters";
    } else if (values.password.length > 12) {
      errors.password = "Password cannot exceed more than 12 characters";
    } else if (!passwordRegex.test(values.password)) {
      errors.password = "Invalid password. Must contain lowercase, uppercase, numeric and one special character.";
    }
    
    return errors;
  };

    //Test
        
    
    
    
    
    
    return (
      //test
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}
      <br></br>
      


      <form onSubmit={handleSubmit}>
        <h3>Sign In</h3>
        <div className="mb-3">
          <div className="field"></div>
          <label>Email address</label>
          <input
            type="text"
            name= "email"
            className="form-control"
            placeholder="Enter email"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.email}</p>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            value={formValues.password}
            onChange={handleChange}
          />
          <p className="forgot-password ">
            Forgot your <a href="/forgot">password?</a></p>
        </div>
                
        <div className="d-grid gap-3">
          <p>{formErrors.password}</p>
          <button type="submit" className="btn btn-primary">
            Log In
          </button>

          <p className="forgot-password text-center">
            Don't have an account? <a href="/sign-up">Sign up</a></p>
        </div>
      </form>
      </div>
    )
  }
// }
// }

export default App;