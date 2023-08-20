import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

import Footer from './Footer';
import Nav from './Nav';
const Login = () => {
    let history = useNavigate();
    const [User, setUser] = useState(null);
    const [password, setpassword] = useState(null);
    document.title = "Login";
    let user = "user@gehu.ac.in";
    let pass = "user@123";
    const post = ()=>{
        if(user===null || password ===null) window.alert('Internal Error');
        if(User===user && password === pass) history('/');
        else window.alert('Wrong Credentials!');
    }
    return (
        <>
            <Nav />
            <section class="form-container">

                <form >
                    <h3>welcome back!</h3>
                    <input type="email" name="email" onChange={(e)=>setUser(e.target.value)} required maxlength="50" placeholder="enter your email" class="box" />
                    <input type="password" name="pass" onChange={(e)=>setpassword(e.target.value)} required maxlength="20" placeholder="enter your password" class="box" />
                    <p>don't have an account? <Link to="/register">register new</Link></p>
                    <div onClick={post} ><input value="login now" name="submit" class="btn" /></div>
                </form>

            </section>

            <Footer/>



        </>
    )
}

export default Login
