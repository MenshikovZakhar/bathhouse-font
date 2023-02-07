import React from 'react';
import './Slider.css';
import slide1 from '../../../images/portfolio/1.jpg';
import slide2 from '../../../images/portfolio/2.png';
import slide3 from '../../../images/portfolio/3.png';
import slide5 from '../../../images/portfolio/5.png';
import slide7 from '../../../images/portfolio/7.jpg';
import slide8 from '../../../images/portfolio/8.jpg';
import slide9 from '../../../images/portfolio/9.jpg';
import slide10 from '../../../images/portfolio/10.jpeg';
import slide11 from '../../../images/portfolio/11.jpg';
import slide12 from '../../../images/portfolio/12.jpeg';
import slide13 from '../../../images/portfolio/13.jpg';
import slide14 from '../../../images/portfolio/14.jpg';
import slide15 from '../../../images/portfolio/15.jpg';
import slide17 from '../../../images/portfolio/17.jpg';
import slide18 from '../../../images/portfolio/18.jpeg';
import slide19 from '../../../images/portfolio/19.jpg';
import slide20 from '../../../images/portfolio/20.jpg';
import slide21 from '../../../images/portfolio/21.jpg';
import slide22 from '../../../images/portfolio/22.jpg';
import slide23 from '../../../images/portfolio/23.jpg';
import slide24 from '../../../images/portfolio/24.jpg';
import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: slide1,
        thumbnail: slide1
    },
    {
        original: slide2,
        thumbnail: slide2
    },

    {
        original: slide5,
        thumbnail: slide5
    },

    {
        original: slide7,
        thumbnail: slide7
    },
    {
        original: slide8,
        thumbnail: slide8
    },
    {
        original: slide9,
        thumbnail: slide9
    },
    {
        original: slide10,
        thumbnail: slide10
    },
    {
        original: slide11,
        thumbnail: slide11
    },
    {
        original: slide12,
        thumbnail: slide12
    },
    {
        original: slide13,
        thumbnail: slide13
    },
    {
        original: slide14,
        thumbnail: slide14
    },
    {
        original: slide15,
        thumbnail: slide15
    },

    {
        original: slide17,
        thumbnail: slide17
    },
    {
        original: slide18,
        thumbnail: slide18
    },

    {
        original: slide19,
        thumbnail: slide19
    },
    {
        original: slide20,
        thumbnail: slide20
    },
    {
        original: slide21,
        thumbnail: slide21
    },
    {
        original: slide22,
        thumbnail: slide22
    },
    {
        original: slide23,
        thumbnail: slide23
    },
    {
        original: slide24,
        thumbnail: slide24
    },
];

class Slider extends React.Component {
    render() {
        return <ImageGallery items={images} />;
    }
}


export default Slider;