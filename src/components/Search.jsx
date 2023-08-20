import React from 'react'
import Nav from './Nav'
import house1 from './images/house-img-1.webp';
import house2 from './images/house-img-2.webp';
import house3 from './images/house-img-3.jpg';
import Footer from './Footer';
import { Link } from 'react-router-dom';
const Search = () => {
   document.title = "Search Page";
  return (
    <>
    <Nav />
    
<section class="filters" style={{paddingBottom: "0"}}>

<form action="" method="post">
   <div id="close-filter"><i class="fas fa-times"></i></div>
   <h3>Filter your search</h3>
      
      <div class="flex">
         <div class="box">
            <p>Enter Location</p>
            <input type="text" name="location" required maxlength="50" placeholder="enter city name" class="input" />
         </div>
         <div class="box">
            <p>Offer Type</p>
            <select name="offer" class="input" required>
               <option value="sale">sale</option>
               <option value="resale">resale</option>
               <option value="rent">rent</option>
            </select>
         </div>
         <div class="box">
            <p>property type</p>
            <select name="type" class="input" required>
               <option value="flat">flat</option>
               <option value="house">house</option>
               <option value="shop">shop</option>
            </select>
         </div>
         <div class="box">
            <p>how many BHK</p>
            <select name="bhk" class="input" required>
               <option value="1">1 BHK</option>
               <option value="2">2 BHK</option>
               <option value="3">3 BHK</option>
               <option value="4">4 BHK</option>
               <option value="5">5 BHK</option>
               <option value="6">6 BHK</option>
               <option value="7">7 BHK</option>
               <option value="8">8 BHK</option>
               <option value="9">9 BHK</option>
            </select>
         </div>
         <div class="box">
            <p>maximum budget</p>
            <select name="minimum" class="input" required>
               <option value="5000000">5 lac</option>
               <option value="1000000">10 lac</option>
               <option value="2000000">20 lac</option>
               <option value="3000000">30 lac</option>
               <option value="4000000">40 lac</option>
               <option value="4000000">40 lac</option>
               <option value="5000000">50 lac</option>
               <option value="6000000">60 lac</option>
               <option value="7000000">70 lac</option>
               <option value="8000000">80 lac</option>
               <option value="9000000">90 lac</option>
               <option value="10000000">1 Cr</option>
               <option value="20000000">2 Cr</option>
               <option value="30000000">3 Cr</option>
               <option value="40000000">4 Cr</option>
               <option value="50000000">5 Cr</option>
               <option value="60000000">6 Cr</option>
               <option value="70000000">7 Cr</option>
               <option value="80000000">8 Cr</option>
               <option value="90000000">9 Cr</option>
               <option value="100000000">10 Cr</option>
               <option value="150000000">15 Cr</option>
               <option value="200000000">20 Cr</option>
            </select>
         </div>
         <div class="box">
            <p>maximum budget</p>
            <select name="maximum" class="input" required>
               <option value="5000000">5 lac</option>
               <option value="1000000">10 lac</option>
               <option value="2000000">20 lac</option>
               <option value="3000000">30 lac</option>
               <option value="4000000">40 lac</option>
               <option value="4000000">40 lac</option>
               <option value="5000000">50 lac</option>
               <option value="6000000">60 lac</option>
               <option value="7000000">70 lac</option>
               <option value="8000000">80 lac</option>
               <option value="9000000">90 lac</option>
               <option value="10000000">1 Cr</option>
               <option value="20000000">2 Cr</option>
               <option value="30000000">3 Cr</option>
               <option value="40000000">4 Cr</option>
               <option value="50000000">5 Cr</option>
               <option value="60000000">6 Cr</option>
               <option value="70000000">7 Cr</option>
               <option value="80000000">8 Cr</option>
               <option value="90000000">9 Cr</option>
               <option value="100000000">10 Cr</option>
               <option value="150000000">15 Cr</option>
               <option value="200000000">20 Cr</option>
            </select>
         </div>
         <div class="box">
            <p>status</p>
            <select name="status" class="input" required>
               <option value="ready to move">ready to move</option>
               <option value="under construction">under construction</option>
            </select>
         </div>
         <div class="box">
            <p>furnished</p>
            <select name="furnished" class="input" required>
               <option value="unfurnished">unfurnished</option>
               <option value="furnished">furnished</option>
               <option value="semi-furnished">semi-furnished</option>
            </select>
         </div>
      </div>
      <input type="submit" value="search property" name="search" class="btn" />
</form>

</section>
<div id="filter-btn" class="fas fa-filter"></div>

<section class="listings">

   <h1 class="heading">searched results</h1>

   <div class="box-container">

      <div class="box">
         <div class="admin">
            <h3>s</h3>
            <div>
               <p>shubham</p>
               <span>10-02-2023</span>
            </div>
         </div>
         <div class="thumb">
            <p class="total-images"><i class="far fa-image"></i><span>4</span></p>
            <p class="type"><span>house</span><span>sale</span></p>
            <form action="" method="post" class="save">
               <button type="submit" name="save" class="far fa-heart"></button>
            </form>
            <img src={house1} alt=""/>
         </div>
         <h3 class="name">modern flats and appartments</h3>
         <p class="location"><i class="fas fa-map-marker-alt"></i><span>raja park jaipur, india - 302001</span></p>
         <div class="flex">
            <p><i class="fas fa-bed"></i><span>3</span></p>
            <p><i class="fas fa-bath"></i><span>2</span></p>
            <p><i class="fas fa-maximize"></i><span>750sqft</span></p>
         </div>
         <Link to="/view_property" class="btn">view property</Link>
      </div>

      <div class="box">
         <div class="admin">
            <h3>d</h3>
            <div>
               <p>devesh</p>
               <span>10-02-2023</span>
            </div>
         </div>
         <div class="thumb">
            <p class="total-images"><i class="far fa-image"></i><span>4</span></p>
            <p class="type"><span>flat</span><span>sale</span></p>
            <form action="" method="post" class="save">
               <button type="submit" name="save" class="far fa-heart"></button>
            </form>
            <img src={house2} alt=""/>
         </div>
         <h3 class="name">modern flats and appartments</h3>
         <p class="location"><i class="fas fa-map-marker-alt"></i><span>raja park jaipur, india - 302001</span></p>
         <div class="flex">
            <p><i class="fas fa-bed"></i><span>3</span></p>
            <p><i class="fas fa-bath"></i><span>2</span></p>
            <p><i class="fas fa-maximize"></i><span>750sqft</span></p>
         </div>
         <Link to="/view_property" class="btn">view property</Link>
      </div>

      <div class="box">
         <div class="admin">
            <h3>r</h3>
            <div>
               <p>rahul</p>
               <span>10-02-2023</span>
            </div>
         </div>
         <div class="thumb">
            <p class="total-images"><i class="far fa-image"></i><span>4</span></p>
            <p class="type"><span>flat</span><span>sale</span></p>
            <form action="" method="post" class="save">
               <button type="submit" name="save" class="far fa-heart"></button>
            </form>
            <img src={house3} alt=""/>
         </div>
         <h3 class="name">modern flats and appartments</h3>
         <p class="location"><i class="fas fa-map-marker-alt"></i><span>raja park jaipur, india - 302001</span></p>
         <div class="flex">
            <p><i class="fas fa-bed"></i><span>3</span></p>
            <p><i class="fas fa-bath"></i><span>2</span></p>
            <p><i class="fas fa-maximize"></i><span>750sqft</span></p>
         </div>
         <Link to="/view_property" class="btn">view property</Link>
      </div>

   </div>

</section>
<Footer />
      
    </>
  )
}

export default Search
