import React, { useState , useEffect} from 'react';
import Home from './Home.js';
import "./style/Login.css";
import logo from '../image/logo.jpeg';
import { useNavigate } from 'react-router-dom';
import  Button   from '@material-ui/core/Button';
// import  Checkbox   from '@material-ui/core/Checkbox';

const Login = () => {
    const [details, setdetails] = useState({name: "", email: "", password: ""});
    // const [checked,setChecked] = useState(true);
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(details);
        navigate('/Home');
        }

        useEffect(() => {
            localStorage.setItem("details", JSON.stringify(details));
          }, [details]);

  return (
    <div className='form-container'>
        <div className='logo'> <img className='logo' src={logo} alt= 'logo' /> </div> 
    <form onSubmit={submitHandler}>
            <h2>Login</h2>
            <div className='form-group'>
                <label htmlFor='name'>Name :</label>
                <input type="text"  name="name" id="name" onChange={e => setdetails({...details, name: e.target.value})} value={details.name} />
            </div>
            <div className='form-group'>
                <label htmlFor='email'>Email :</label>
                <input type="email" name="email" id="email" onChange={e => setdetails({...details, email: e.target.value})} value={details.email} />
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password :</label>
                <input type="password" name="password" id="password" onChange={e => setdetails({...details, password: e.target.value})} value={details.password}/>
            </div>
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
