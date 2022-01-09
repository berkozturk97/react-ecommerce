import React from 'react'
import Announcement from '../components/announcement/announcement';
import Category from '../components/categories/category';
import Navbar from '../components/nav-bar/navbar';
import Slider from '../components/slider/slider';

const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <Category />
        </div>
    )
}

export default Home
