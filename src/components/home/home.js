import React from 'react';
import Body from '../body/body';
import Navbar from '../navbar/navbar';
import './home.css';

function Home() {
    return (
        <div className="home">
            <div>
                <Navbar />
            </div>
            <div>
                <Body />
            </div>
        </div>
    )
}

export default Home
