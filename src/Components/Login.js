import React, { useState , useEffect} from 'react';
import Home from './Home.js';
import "./style/Login.css";
import logo from '../image/logo.jpeg';
import { useNavigate } from 'react-router-dom';
import  Button   from '@material-ui/core/Button';

const Login = () => {
    const [details, setdetails] = useState({username: "", email: "", password: ""});
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        setFormErrors(validate(details));
        setIsSubmit(true);
        console.log(details);
        
        }

        useEffect(() => {
            localStorage.setItem("details", JSON.stringify(details));
          }, [details]);

          useEffect(() => {
            console.log(formErrors);
            if (Object.keys(formErrors).length === 0 && isSubmit) {
              console.log(details);
              navigate('/home');
            }
          }, [formErrors]);

          const validate = (values) => {
              const errors = {};
           
            if (!values.username) {
                errors.username = "Username is required!";
              }
            if (!values.email) {
                errors.email = "Email is required!";
              } 
            if (values.password.length === 0) {
                errors.password = "Password is required";
              } 
              else if (values.password.length < 4) {
                errors.password = "Password must be more than 4 characters";
              } else if (values.password.length > 10) {
                errors.password = "Password cannot exceed more than 10 characters";
              }
              return errors;
            };

  return (
    <div className='form-container'>
        <div className='logo'> <img className='logo' src={logo} alt= 'logo' /> </div> 
    <form onSubmit={submitHandler}>
            <h2>Login</h2>
            <div className='form-group'>
                <label htmlFor='username'>Username :</label>
                <input type="text"  username="username" id="username" onChange={e => setdetails({...details, username: e.target.value})} value={details.username} />
            </div>
            <p> {formErrors.username} </p>
            <div className='form-group'>
                <label htmlFor='email'>Email :</label>
                <input type="email" name="email" id="email" onChange={e => setdetails({...details, email: e.target.value})} value={details.email} />
            </div>
            <p> {formErrors.email} </p>
            <div className='form-group'>
                <label htmlFor='password'>Password :</label>
                <input type="password" name="password" id="password" onChange={e => setdetails({...details, password: e.target.value})} value={details.password}/>
            </div>
            <p> {formErrors.password} </p>
            <Button type='submit' variant='contained' color='primary'>Login</Button>
            {/* <Checkbox 
            // checked={checked}
            inputProps={{
                'aria-label':'secondary-checkbox'
            }}
            /> */}
    </form>
    </div>
  )
}

export default Login;
