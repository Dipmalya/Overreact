import React, { Component } from 'react';

import nokia1 from '../img/nokia1.jpg'
import nokia2 from '../img/nokia2.jpeg'
import nokia3 from '../img/nokia3.jpeg'
import nokia4 from '../img/nokia4.jpg'

class Nokia extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            imgs: [ nokia1, nokia2, nokia3, nokia4 ]
         }
    }
    render() { 
        let images = this.state.imgs.map((image,index) => {
             return <img className="img-thumbnail" width="580px" src={image} alt={index+1} key={index}/>
        })
        return ( 
            <div>
            <h3>Nokia</h3>
            {images}
            </div>
         );
    }
}
 
export default Nokia;