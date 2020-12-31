import React from 'react';
import SliderFirst from '../sliders/sliderfirst/SliderFirst';
import SliderSale from '../sliders/slidersale/SliderSale';
import SliderFeatured from '../sliders/sliderfeatured/SliderFeatured';
import './home.components.styles.css';

const Home = () => {
    return (
        <div>
            <SliderFirst/>
            <h1 className="homeTitle">FEATURED ITEMS</h1>
            <br/>
            <SliderFeatured/>
            <h1 className="homeTitle">SALE ITEMS</h1>
            <br/>
            <SliderSale/>
        </div>
    )
}

export default Home;