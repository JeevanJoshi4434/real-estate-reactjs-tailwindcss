import React from 'react'
import { Link } from 'react-router-dom'
import aboutImg from './images/about-img.svg';
import step1 from './images/step-1.png';
import step2 from './images/step-2.png';
import step3 from './images/step-3.png';
import pic1 from './images/pic-1.png';
import pic2 from './images/pic-2.png';
import pic3 from './images/pic-3.png';
import Footer from './Footer';
import Nav from './Nav';

const About = () => {
    document.title = "About Us"
    return (
        <>
            <Nav />

            <section class="about">

                <div class="row">
                    <div class="image">
                        <img src={aboutImg} alt="" />
                    </div>
                    <div class="content">
                        <h3>why choose us?</h3>
                        <p>We have a proven track record of successful real estate transactions and satisfied clients. Our reputation speaks for itself, and we have built a strong presence in the market based on our reliable and efficient services.</p>
                        <Link to="/contact" class="inline-btn">contact us</Link>
                    </div>
                </div>

            </section>

            <section class="steps">

                <h1 class="heading">3 simple steps</h1>

                <div class="box-container">

                    <div class="box">
                        <img src={step1} alt="" />
                        <h3>search property</h3>

                    </div>

                    <div class="box">
                        <img src={step2} alt="" />
                        <h3>contact agents</h3>

                    </div>

                    <div class="box">
                        <img src={step3} alt="" />
                        <h3>enjoy property</h3>

                    </div>

                </div>

            </section>


            <section class="reviews mt-6 mb-3">

                <h1 class="heading">client's reviews</h1>

                <div class="box-container">

                    <div class="box">
                        <div class="user">
                            <img src={pic1} alt="" />
                            <div>
                                <h3>shubham</h3>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </div>
                        <p>The houses and apartments are perfect fully furnished and all facilities are provided no need to worry after purchasing houses from them. </p>
                    </div>

                    <div class="box">
                        <div class="user">
                            <img src={pic2} alt="" />
                            <div>
                                <h3>shrey</h3>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </div>
                        <p>Best facilities are provided by them in these particular areas</p>
                    </div>

                    <div class="box">
                        <div class="user">
                            <img src={pic3} alt="" />
                            <div>
                                <h3>Rishab</h3>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </div>
                        <p>Perfect houses</p>
                    </div>
                </div>
            </section>
            <Footer />

        </>
    )
}

export default About
