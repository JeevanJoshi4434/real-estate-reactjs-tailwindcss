import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Listings from './components/Listings'
import Login from './components/Login'
import Register from './components/Register'
import Search from './components/Search'
import ViewProperty from './components/View_property'
import ViewProperty1 from './components/View_property1'
import ViewProperty2 from './components/View_property2'
import ViewProperty3 from './components/View_property3'
import ViewProperty4 from './components/View_property4'
import ViewProperty5 from './components/View_property5'
const routes = () => {
    return (
        <BrowserRouter>
            <Routes >
                <Route path="/" element={<Home />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/listings" element={<Listings />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/search" element={<Search />}></Route>
                <Route path="/view_property" element={<ViewProperty />}></Route>
                <Route path="/view_property1" element={<ViewProperty1 />}></Route>
                <Route path="/view_property2" element={<ViewProperty2 />}></Route>
                <Route path="/view_property3" element={<ViewProperty3 />}></Route>
                <Route path="/view_property4" element={<ViewProperty4 />}></Route>
                <Route path="/view_property5" element={<ViewProperty5 />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default routes
