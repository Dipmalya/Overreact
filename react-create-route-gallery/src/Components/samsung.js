import React, { Component } from 'react';
import samsung1 from '../img/samsung1.jpg'
import samsung2 from '../img/samsung2.jpg'
import samsung3 from '../img/samsung3.jpg'
import samsung4 from '../img/samsung4.jpg'

class Samsung extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            imgs: [ samsung1, samsung2, samsung3, samsung4 ]
         }
    }
    render() { 
        let images = this.state.imgs.map((image,index) => {
             return <img className="img-thumbnail" width="580px" src={image} alt={index+1} key={index}/>
        })
        return ( 
            <div>
            <h3>Samsung</h3>
            {images}
            </div>
         );
    }
}
 
export default Samsung;