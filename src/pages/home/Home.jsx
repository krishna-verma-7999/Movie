import React from 'react'
import HeroBanner from './heroBanner/HeroBanner';
import Trending from './trending/Trending';
import Popular from './popular/Popular';
import TopRated from './topRated/TopRates';
import './style.scss'

const Home = () => {
    return (
        <div className='homePage'>
            <HeroBanner></HeroBanner>
            <Trending />
            {/* <Popular /> */}
            <TopRated />
        </div>
    )
}

export default Home