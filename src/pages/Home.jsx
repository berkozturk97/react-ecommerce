import React from 'react'
import Announcement from '../components/announcement/announcement';
import Navbar from '../components/nav-bar/navbar';
import Slider from '../components/slider/slider';

const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
        </div>
    )
}

export default Home
