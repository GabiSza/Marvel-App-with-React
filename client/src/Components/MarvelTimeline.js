import React, { useEffect, useState } from "react"; import "./MarvelTimeline.css";
import styled from 'styled-components';
import { Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom';
import {IoMdFilm, IoIosImage, IoMdFlash, IoIosBook} from "react-icons/io";



//let emptyTimeline = { id: "", releaseYear: "", title: "", marvelLink: "" };

export default function MarvelTimeline() {
  // ARRAY OF MOVIES - MAP THROUGH BELOW
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    try {
      let response = await fetch("/movielist");
      let data = await response.json();
      setMovies(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
  
      <Wrapper>
      <h2>Marvel Cinematic Universe Timeline</h2>
      <Splide 
        options={{
          perPage:3,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
        >
      
            {movies.map((movie) => (
              <SplideSlide key={movie.id}>
                <Card>
                
                <img src={movie.imageLink} /> 
                
                <p >
                
                  <Link to={movie.marvelLink} target="_blank"> 
                  <IoMdFilm />
                  <h4> SPOILER </h4>  </Link> 
                  
                  </p> 
                  <title>{movie.releaseYear} </title>
                <Gradient />
               
                </Card>
              </SplideSlide>
            ))}
         
  
      </Splide>
      </Wrapper>
   
  );
}
const Wrapper = styled.div`
margin: 4rem 0rem;
background-color: white;
`;
const Card = styled.div`
font-family: 'Rubik Iso', cursive;
min-height: 35rem;
border-radius: 2rem;
overflow: hidden;
position: relative;

img{
  border-radius: 2rem;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

p{
  position: absolute;
  z-index: 10;
  left: 50%;
  bottom: 0%;
  transform: translate(-50%, 0%);
  color: white;
  width: 100%;
  font-family: 'Rubik Iso', cursive;
  text-align: center;
  font-size: 2rem;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}
a{
  position: absolute;
  color: #E5E4E2;
  font-size: 2rem;
  font-family: 'Rubik Iso', cursive;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 100;
}
title{
  
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color:#E5E4E2;
  font-size: 2rem;
  text-align: center;
  font-family: 'Rubik Iso', cursive;
  top: 10%;
 }
`;

const Gradient = styled.div`
z-index: 3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;

