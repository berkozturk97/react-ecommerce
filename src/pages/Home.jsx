import React from 'react'
import Announcement from '../components/announcement/announcement';
import Category from '../components/categories/category';
import Navbar from '../components/nav-bar/navbar';
import Products from '../components/products/products';
import Slider from '../components/slider/slider';

const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <Category />
            <Products />
        </div>
    )
}

export default Home
