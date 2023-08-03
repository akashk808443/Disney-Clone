import React from 'react'
import styled from "styled-components"
const Viewers = () => {
  return (
    <Container>
      <Wrap>
      <img src='/images/viewers-disney.png'/>
      </Wrap>
      <Wrap>
      <img src='/images/viewers-pixar.png'/>
      </Wrap>
      <Wrap>
      <img src='/images/viewers-marvel.png'/>
      </Wrap>
      <Wrap>
      <img src='/images/viewers-starwars.png'/>
      </Wrap>
      <Wrap>
      <img src='/images/viewers-national.png'/>
      </Wrap>
    </Container>
  )
}

export default Viewers;

const Container=styled.div`
   margin-top:30px;
   display:grid;
   grid-template-columns:repeat(5, minmax(0, 1fr));
   grid-gap:25px ;
   padding:30px 0px 26px;


`
const Wrap=styled.div`
   border-radius:10px;
   border:3px solid rgba(249, 249, 249, 0.1);
   box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition:.0s cubic-bezier(.1,.7,.1,.1) all;

    img{
      width:100%;
      height:100%;
      object-fit:cover;

    }
    &:hover{
      transform:scale(1.08);
      border-color:rgba(249, 249, 249, 0.8)
    }
`