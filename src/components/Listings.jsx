import React from 'react'
import Nav from './Nav'
import house1 from "./images/house-img-1.webp";
import house2 from "./images/house-img-2.webp";
import house3 from "./images/house-img-3.jpg";
import house4 from "./images/house-img-4.webp";
import house5 from "./images/house-img-5.webp";
import house6 from "./images/house-img-6.webp";
import { Link } from 'react-router-dom';
import Footer from './Footer';
const Listings = () => {
    document.title = "All Listings";
    return (
        <>
            <Nav />
            <section class="listings">

                <h1 class="heading">All Listings</h1>

                <div class="box-container">

                    <div class="box">
                        <div class="admin">
                            <h3>s</h3>
                            <div>
                                <p>Shubham</p>
                                <span>10-02-2023</span>
                            </div>
                        </div>
                        <div class="thumb">
                            <p class="total-images"><i class="far fa-image"></i><span>4</span></p>
                            <p class="type"><span>House</span><span>Sale</span></p>
                            <form action="" method="post" class="save">
                                <button type="submit" name="save" class="far fa-heart"></button>
                            </form>
                            <img src={house1} alt="" />
                        </div>
                        <h3 class="name">Modern Flats and Appartments</h3>
                        <p class="location"><i class="fas fa-map-marker-alt"></i><span>Jaipur, India - 302001</span></p>
                        <div class="flex">
                            <p><i class="fas fa-bed"></i><span>3</span></p>
                            <p><i class="fas fa-bath"></i><span>3</span></p>
                            <p><i class="fas fa-maximize"></i><span>750sqft</span></p>
                        </div>
                        <Link to="/view_property" class="btn">View Property</Link>
                    </div>

                    <div class="box">
                        <div class="admin">
                            <h3>d</h3>
                            <div>
                                <p>Devesh</p>
                                <span>10-03-2023</span>
                            </div>
                        </div>
                        <div class="thumb">
                            <p class="total-images"><i class="far fa-image"></i><span>4</span></p>
                            <p class="type"><span>Flat</span><span>Sale</span></p>
                            <form action="" method="post" class="save">
                                <button type="submit" name="save" class="far fa-heart"></button>
                            </form>
                            <img src={house2} alt=""/>
                        </div>
                        <h3 class="name">Modern Flats and Appartments</h3>
                        <p class="location"><i class="fas fa-map-marker-alt"></i><span>Jaipur, India - 302001</span></p>
                        <div class="flex">
                            <p><i class="fas fa-bed"></i><span>2</span></p>
                            <p><i class="fas fa-bath"></i><span>2</span></p>
                            <p><i class="fas fa-maximize"></i><span>800sqft</span></p>
                        </div>
                        <Link to="/view_property1" class="btn">View Property</Link>
                    </div>

                    <div class="box">
                        <div class="admin">
                            <h3>r</h3>
                            <div>
                                <p>Rahul</p>
                                <span>10-01-2023</span>
                            </div>
                        </div>
                        <div class="thumb">
                            <p class="total-images"><i class="far fa-image"></i><span>4</span></p>
                            <p class="type"><span>Flat</span><span>Sale</span></p>
                            <form action="" method="post" class="save">
                                <button type="submit" name="save" class="far fa-heart"></button>
                            </form>
                            <img src={house3} alt="" />
                        </div>
                        <h3 class="name">Modern Flats and Appartments</h3>
                        <p class="location"><i class="fas fa-map-marker-alt"></i><span>Jaipur, India - 302001</span></p>
                        <div class="flex">
                            <p><i class="fas fa-bed"></i><span>4</span></p>
                            <p><i class="fas fa-bath"></i><span>5</span></p>
                            <p><i class="fas fa-maximize"></i><span>1100sqft</span></p>
                        </div>
                        <Link to="/view_property2" class="btn">View Property</Link>
                    </div>

                    <div class="box">
                        <div class="admin">
                            <h3>t</h3>
                            <div>
                                <p>Tarun</p>
                                <span>10-02-2023</span>
                            </div>
                        </div>
                        <div class="thumb">
                            <p class="total-images"><i class="far fa-image"></i><span>4</span></p>
                            <p class="type"><span>Flat</span><span>Sale</span></p>
                            <form action="" method="post" class="save">
                                <button type="submit" name="save" class="far fa-heart"></button>
                            </form>
                            <img src={house4} alt="" />
                        </div>
                        <h3 class="name">Modern Flats and Appartments</h3>
                        <p class="location"><i class="fas fa-map-marker-alt"></i><span>Jaipur, India - 302001</span></p>
                        <div class="flex">
                            <p><i class="fas fa-bed"></i><span>5</span></p>
                            <p><i class="fas fa-bath"></i><span>5</span></p>
                            <p><i class="fas fa-maximize"></i><span>1350sqft</span></p>
                        </div>
                        <Link to="/view_property3" class="btn">View Property</Link>
                    </div>

                    <div class="box">
                        <div class="admin">
                            <h3>p</h3>
                            <div>
                                <p>Pankaj</p>
                                <span>10-05-2023</span>
                            </div>
                        </div>
                        <div class="thumb">
                            <p class="total-images"><i class="far fa-image"></i><span>4</span></p>
                            <p class="type"><span>flat</span><span>sale</span></p>
                            <form action="" method="post" class="save">
                                <button type="submit" name="save" class="far fa-heart"></button>
                            </form>
                            <img src={house5} alt="" />
                        </div>
                        <h3 class="name">modern flats and appartments</h3>
                        <p class="location"><i class="fas fa-map-marker-alt"></i><span>Jaipur, India - 302001</span></p>
                        <div class="flex">
                            <p><i class="fas fa-bed"></i><span>4</span></p>
                            <p><i class="fas fa-bath"></i><span>3</span></p>
                            <p><i class="fas fa-maximize"></i><span>790sqft</span></p>
                        </div>
                        <Link to="/view_property4" class="btn">View Property</Link>
                    </div>

                    <div class="box">
                        <div class="admin">
                            <h3>n</h3>
                            <div>
                                <p>Naman</p>
                                <span>10-06-2023</span>
                            </div>
                        </div>
                        <div class="thumb">
                            <p class="total-images"><i class="far fa-image"></i><span>4</span></p>
                            <p class="type"><span>Flat</span><span>Sale</span></p>
                            <form action="" method="post" class="save">
                                <button type="submit" name="save" class="far fa-heart"></button>
                            </form>
                            <img src={house6} alt="" />
                        </div>
                        <h3 class="name">Modern Flats and Appartments</h3>
                        <p class="location"><i class="fas fa-map-marker-alt"></i><span>Jaipur, India - 302001</span></p>
                        <div class="flex">
                            <p><i class="fas fa-bed"></i><span>3</span></p>
                            <p><i class="fas fa-bath"></i><span>4</span></p>
                            <p><i class="fas fa-maximize"></i><span>1240sqft</span></p>
                        </div>
                        <Link to="/view_property5" class="btn">View Property</Link>
                    </div>

                </div>

            </section>
            <Footer />
        </>
    )
}

export default Listings
