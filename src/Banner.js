import React, { Component } from 'react';

class Banner extends Component {
    render() { 
        return (
            <div className="App">
                <h1>Leo's Treasures</h1>
                <a href="/" style={{ textDecoration: 'none', color: 'black', minWidth: '10px', width: '15%', display: 'inline-block'}}> Home </a>
                <a href="/about" style={{ textDecoration: 'none', color: 'black', minWidth: '10px', width: '15%', display: 'inline-block'}}> About </a>
                <a href="/shop" style={{ textDecoration: 'none', color: 'black', minWidth: '10px', width: '15%', display: 'inline-block'}}> Shop </a>
            </div>
        );
    }
}
 
export default Banner;