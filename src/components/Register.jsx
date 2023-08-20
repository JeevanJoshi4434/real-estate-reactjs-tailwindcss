import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Nav from './Nav'

const Register = () => {
    document.title = "Register";
    return (
        <>
            <Nav />
            <section class="form-container">
                <form>
                    <h3>create an account!</h3>
                    <input type="name" name="name" required maxlength="50" placeholder="enter your name" class="box" />
                    <input type="email" name="email" required maxlength="50" placeholder="enter your email" class="box" />
                    <input type="password" name="pass" required maxlength="20" placeholder="enter your password" class="box" />
                    <input type="password" name="c_pass" required maxlength="20" placeholder="confirm your password" class="box" />
                    <p>already have an account? <Link to="/login">login now</Link></p>
                    <Link to="/"><button style={{width:"100%",height:"50px",backgroundColor:"#6c7ae4",color:"white",fontSize:"14px",borderRadius:"5px"}}>Register Now</button></Link>
                </form>
            </section>

            <Footer />

        </>
    )
}

export default Register
