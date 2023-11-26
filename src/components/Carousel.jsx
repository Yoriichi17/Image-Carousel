import React, { useState } from 'react';
import image1 from '../images/image1.webp';
import image2 from '../images/image2.webp';
import image3 from '../images/image3.webp';
import image4 from '../images/image4.webp';
import image5 from '../images/image5.webp';



function Carousel() {
  const [index, setIndex] = useState(0);
  let data = [
    {
      id: 1,
      url: image1,
    },
    {
      id: 2,
      url: image2,
    },
    {
      id: 3,
      url: image3,
    },
    {
      id: 4,
      url: image4,
    },
    {
      id: 5,
      url: image5,
    },
  ];
  let eachImage = [data[index]];

  let PrevHandler = () => {
    if (index <= 0) {
      setIndex(data.length);
    }
    setIndex((Prev) => Prev - 1);
  };

  let nextHandler = () => {
    if (index >= data.length - 1) {
      setIndex(-1);
    }
    setIndex((next) => next + 1);
  };

  return (
    <div className='App'>
      <h1 className="title">Welcome to Image Carousel</h1>
      {eachImage.map((item) => (
        <img id='imgg' src={item.url} alt="" width={300} height={300} />
      ))}
      <div className="btns">
        <button className='btn' id='btn1' onClick={PrevHandler}>Prev</button>
        <button className='btn' id='btn2' onClick={nextHandler}>Next</button>
      </div>
    </div>
  );
}

export default Carousel;