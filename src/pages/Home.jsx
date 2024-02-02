import React from 'react'
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import Banner from '../images/banner.jpeg';
import '../styles/Home.css'

function Home() {
  return (
    <Layout>
      <div className="home"  style={{backgroundImage: ` url(${ Banner }) `}} >
        <div className="headerContainer">
          <h1>Desi Foods</h1>
          <p>Best Food In Punjab</p>
          <Link to= "/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Home