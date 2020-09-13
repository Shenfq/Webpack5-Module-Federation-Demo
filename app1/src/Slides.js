import React, { useState } from 'react';

import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'

const images = [img1, img2, img3, img4]
// transition: all 1s;
// transform: translateX(-100%)
const Slides = () => {
  const [num, changeNum] = useState(0);
  const left = () => {
    if (num > 0) {
      changeNum(num - 1)
    }
  }
  const right = () => {
    if (num < 3) {
      changeNum(num + 1)
    }
  }
  const btnStyle = {
    cursor: 'pointer',
    display: 'inline-block',
    position: 'absolute',
    top: '50%',
    width: 50,
    height: 50,
    marginTop: -25,
    fontSize: '36px',
    lineHeight: '45px',
    color: 'white',
    background: 'rgba(0, 0, 0, 0.3)',
    borderRadius: '50%',
    textAlign: 'center',
  }
  return (
    <div style={{ position: 'relative', height: 300, margin: '0 20px', overflow: 'hidden' }}>
      < div style={{
        whiteSpace: 'nowrap',
        transition: 'transform .6s',
        transform: `translateX(-${num * 100}%)`
      }}>
        {
          images.map(url => <img key={url} src={url} width="100%" height="100%" />)
        }
      </div>
      <span style={{ ...btnStyle, left: 5, }} onClick={left}>{'<'}</span>
      <span style={{ ...btnStyle, right: 5 }} onClick={right}>{'>'}</span>
    </div>
  )
};

export default Slides;
