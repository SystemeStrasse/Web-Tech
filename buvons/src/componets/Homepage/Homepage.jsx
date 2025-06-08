import React from 'react'
import Header from '../Header/Header'
import './Homepage.css'
import { Link } from 'react-router-dom'


export default function Homepage() {
  return (
    <>
      {/* header section */}
      <Header />
      {/* Coffee for Celebrate section */}
      <div className='content' style={{
        position: 'absolute',
        top: '30%',
        left: 0,
        right: 0,
        backgroundColor: '#4E3B31',
        padding: '2% 0 2% 0'
      }}>

        <img src='./images/1.jpg' alt="" style={{ float: 'left' }} />
        <div style={{
          float: 'right', color: 'white',
          marginRight: '20%',
          marginTop: '7%'
        }}>

          <h1 style={{ color: 'white' }}>Coffee for Celebrate</h1>
          <p><Link to="/tablebooking" className='link' style={{ color: 'white' }}>Book Your Table</Link></p>
        </div>
      </div >

      {/* Coffee for happiness section */}

      <div className='content' style={{
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        backgroundColor: '#E8CBAF',
        padding: '2% 0 2% 0'
      }}>

        <img src='./images/2.jpg' alt="" style={{ float: 'right', marginRight: '2%' }} />
        <div style={{
          float: 'left', color: 'black',
          marginLeft: '20%',
          marginTop: '7%'
        }}>

          <h1>Coffee for Happiness</h1>
          <p><Link to="/about-us" className='link' style={{ color: 'black' }}>About Us</Link></p>
        </div>
      </div >

      {/* Coffee for Freedom section */}
      <div className='content' style={{
        position: 'absolute',
        top: '170%',
        left: 0,
        right: 0,
        backgroundColor: '#C2B280',
        padding: '2% 0 2% 0'
      }}>

        <img src='./images/3.jpg' alt="" style={{ float: 'left', marginLeft: '2%' }} />
        <div style={{
          float: 'left', color: 'black',
          marginLeft: '20%',
          marginTop: '7%'
        }}>
          <h1>Coffee for Freedom</h1>
          <p><Link to="/facilities" className='link' style={{ color: 'black' }}>Learn about Facilities</Link></p>
        </div>
      </div>

      {/* Coffee for Everyone section */}
      <div className='content' style={{
        position: 'absolute',
        top: '240%',
        left: 0,
        right: 0,
        backgroundColor: '#7B4B3A',
        padding: '2% 0 2% 0'
      }}>

        <img src='./images/4.jpg' alt='' style={{ float: 'right', marginRight: '2%' }} />
        <div style={{
          float: 'right',
          color: 'white',
          marginRight: '20%',
          marginTop: '7%'
        }}>
          <h1 style={{ color: 'white' }}>Coffee for Everyone</h1>
          <p><Link to="/orders" className='link' style={{ color: 'white' }}>Place your Order</Link></p>
        </div>
      </div>

      {/* footer section */}
      <footer>
        <center>

          <h3>Follow Us</h3>
          <a href="">Facebook</a>
          <a href="">Instagram</a>
          <a href="">Pintrest</a> <br />
          
          <a href='tel:123456789'></a>
          <a href='mailto:info@buvons.lk'></a>

          <p>© 2025 Buvons. All Rights Reserved</p>
        </center>
      </footer>
    </>
  )
}
