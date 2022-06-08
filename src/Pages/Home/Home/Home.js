import React from 'react';
import Banner from '../../Banner/Banner';
import Contact from '../../Contact/Contact';
import Projects from '../../Projects/Projects';
import Service from '../../Service/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;