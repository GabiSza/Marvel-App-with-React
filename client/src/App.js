import React, { useEffect, useState } from "react";
import MarvelGallery from "./components/MarvelGallery";
import MarvelList from "./components/MarvelList";
import MarvelTimeline from "./components/MarvelTimeline";
import MarvelRecs from "./components/MarvelRecs";
import MarvelComics from "./components/MarvelComics";
//import banner from "client/src/assets/banner.jpg";
import "./App.css";
import "./";
import { Routes, Route, Link } from "react-router-dom";
import {IoMdFilm, IoIosImage, IoMdFlash, IoIosBook} from "react-icons/io";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';


function App() {
  return (
    <Wrapper>
      {/* <div className="marvel-mini-banner">
        <img
          src="https://www.seekpng.com/png/detail/368-3684995_marvel-logo-marvel-comics.png"
          alt="MM logo"
        />
        
      </div> */}
     
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light" size={40}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              
            <SLink to={"./"}>
             
                <IoIosImage size={70} />
               <h4>Superhero Gallery</h4>
             </SLink>
                
              
             <SLink to="/timeline">
                <IoMdFilm  size={70}/>
                <h4>MCU Timeline</h4>
                </SLink>
             

                <SLink to="/list">
                <IoMdFlash size={70} />
                <h4>Find my Superhero</h4>
                </SLink>
            

                <SLink to="/comics">
                <IoIosBook size={70}/>
                <h4>Comics</h4>
                </SLink>
              <Logo>
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Marvel-Comics-Logo.svg/1280px-Marvel-Comics-Logo.svg.png' /> 
              </Logo>
            </div>
          </div>
        </div>
      </nav>


      <>
        <Routes>
          <Route path="/" element={<MarvelGallery />} />
          <Route path="/timeline" element={<MarvelTimeline />} />
          <Route path="/list" element={<MarvelList />} />
          <Route path="/recs" element={<MarvelRecs />} />
          <Route path="/comics" element={<MarvelComics />} />

        </Routes>
      </>
    </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
font-family: 'Shantell Sans', cursive;
font-size: 30px;
text-align: center;
`;

const SLink = styled(NavLink)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 50%;
margin-right: 2rem;
text-decoration: none;
background: linear-gradient(35deg,#44A08D, #093637);
width: 9rem;
height: 9rem;
cursor; pointer;
transform: scale(0.8);


h4 {
  color: white;
  font-size: 0.8rem;
}
svg {
  color: white;
  font-size: 1.5rem;
}
&.active {
  background: linear-gradient( 
    #fceabb, 
    #f8b500);
  svg {
      color: white;
  }
  h4 {
      color: white;
  }
}
`;
const Logo = styled.div`
height: 100px;
weight:175px;
margin-left: auto;
position:absolute;
left: 1200px;
top: 30px;
`;
export default App;
