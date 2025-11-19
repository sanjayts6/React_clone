import React from 'react'
import '../components/Midbon.css'

function Midbon() {
  return (
    <div>
      <img src="discountoff.png" alt="" />

      <div className="event">
        <div className="event-box">
          <img src="bonkersevent.jpg" alt="Shop Men" />
          <div className="overlay">
            <h2>SHOP MEN</h2>
            <button>EXPLORE</button>
          </div>
        </div>

       
        <div className="event-box">
          <img src="bonkersevent1.webp" alt="Shop Women" />
          <div className="overlay">
            <h2>SHOP WOMEN</h2>
            <button>EXPLORE</button>
          </div>
        </div>
      </div>

      <div className='product'>
        <div className='proitems'>
        <img src="product1.png" alt="" />
        <h2>BONKERS ORGINAL SOCKS</h2>
        <h2>Rs.299</h2>
        </div>
        <div className='proitems'>
        <img src="product2.png" alt="" />
        <h2>LILO 626 CREWS ANKLE SOCKS</h2>
        <h3>Rs.399</h3>
        </div>
        <div className='proitems'>
        <img src="product3.png" alt="" />
        <h2>MICKEY 28 ANGLE SOCKS</h2>
        <h3>Rs.799</h3>
        </div>
        <div className='proitems'>
        <img src="product4.png" alt="" />
        <h2>HELLO KITTY ANGLE SOCKS</h2>
        <h3>Rs.399</h3>
        </div>
      </div>
      <div className='story'>
        <img src="bonkersstory.png" alt="" />
        <img src="bonkersship.png" alt="" />
      </div>
    </div>
  )
}

export default Midbon