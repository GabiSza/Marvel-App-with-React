import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom';

function MarvelComics() {

    const [comics, setComics] = useState([]);

    useEffect(() => {
        getComics();
    }, []);

    const getComics = async () => {

      const check = localStorage.getItem('comics');

      if(check) {
        setComics(JSON.parse(check));
      } else {
        const api = await fetch(`https://gateway.marvel.com/v1/public/comics?apikey=aa7c22caef66514f337e905ce4490139&hash=a592d58648f41450da802c55aac477ed`);
        const data = await api.json();

        localStorage.setItem("comics", JSON.stringify(data.id));
        setComics(data.id);
      console.log(data.id);
      }
      
    };

  return (
    <div className="comics">
      <Wrapper>
        <h3>Comics</h3>

        <Splide 
        options={{
          perPage:3,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
        >
        {comics.map((data) => {
          return(
            <SplideSlide key={data.id}>
              <Card>
              <Link to={"/name/" + data.id}>
                    <p>{data.name}</p>
                    <img src={data.thumbnail} alt={data.description} />
                    <Gradient />
                </Link>
              </Card>
              </SplideSlide>
          );
        })}
        </Splide>
    </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
margin: 4rem 0rem;
`;
const Card = styled.div`
min-height: 25rem;
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
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

const Gradient = styled.div`
z-index: 3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;
    
export default MarvelComics;
