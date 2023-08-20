import React from 'react'
import Nav from './Nav'
import imgs from "./images/contact-img.svg";
import Footer from './Footer';
const Contact = () => {
    document.title="Contact Us";
    return (
        <>
            <Nav />
            <section class="contact">

                <div class="row">
                    <div class="image">
                        <img src={imgs} alt="" />
                    </div>
                    <form action="" method="post">
                        <h3>get in touch</h3>
                        <input type="text" name="name" required maxlength="50" placeholder="enter your name" class="box" />
                        <input type="email" name="email" required maxlength="50" placeholder="enter your email" class="box" />
                        <input type="number" name="number" required maxlength="10" max="9999999999" min="0" placeholder="enter your number" class="box" />
                        <textarea name="message" placeholder="enter your message" required maxlength="1000" cols="30" rows="10" class="box"></textarea>
                        <input type="submit" value="send message" name="send" class="btn" />
                    </form>
                </div>

            </section>
            <Footer />

        </>
    )
}

export default Contact
