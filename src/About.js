import React, { Component } from 'react';
import Banner from './Banner';

class About extends Component {
    render() { 
        return (
            <div className="App">
                <Banner />
                <h1>About</h1>
                <p>Stuff about Leo's treasure</p>
            </div>
        );
    }
}
 
export default About;