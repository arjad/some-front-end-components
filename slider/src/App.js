import React from "react";
// import "./styles.css";
import AliceCarousel from 'react-alice-carousel';
// import "react-alice-carousel/lib/alice-carousel.css";
// import image1 from ''
// import image2 from ''
// import image3 from ''
// import image4 from ''
import { Zoom } from 'react-slideshow-image';


export default function App() {
  return (
    <div className="App">
     <AliceCarousel autoPlay autoPlayInterval="1000">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2QnjMCMxnep4bF3nPhS36xbEj-kLRVGmA2Q&usqp=CAU" className="sliderimg" alt=""/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2QnjMCMxnep4bF3nPhS36xbEj-kLRVGmA2Q&usqp=CAU" className="sliderimg" alt=""/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2QnjMCMxnep4bF3nPhS36xbEj-kLRVGmA2Q&usqp=CAU" className="sliderimg" alt=""/>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2QnjMCMxnep4bF3nPhS36xbEj-kLRVGmA2Q&usqp=CAU" className="sliderimg" alt=""/>
    </AliceCarousel>
    </div>
  );
}
