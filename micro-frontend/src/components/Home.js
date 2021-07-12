import React from 'react';
import TitleList from './TitleList';
import './Home.css';

const Home = () => {
    return (
        <main>
            <p className="home-title">
                Welcome to <b>Microblog</b>, our innovative site for communicating on the information superhighway.  
            </p>
            <TitleList/>
        </main>
    )
}

export default Home;