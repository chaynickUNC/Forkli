import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Home = () => {
    return (
        <div className="homepage">
            <Header/>
            
          <h1 className="hp_searchbox_header">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
          </h1>

          <input placeholder="Search Recipes" type="text" className="credential_input" style={{backgroundColor:"white", width:"60%"}} />

            <Footer/>
        </div>
    )
}

export default Home
