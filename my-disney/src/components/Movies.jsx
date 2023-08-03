import React from 'react'
import styled from "styled-components"
const Movies = () => {
  return (
    <Container>
        <h4>Recommended for You</h4>
        <Content>
            <Wrap>
                <img src="/images/home-background.png"/>
            </Wrap>
            <Wrap>
                <img src="/images/home-background.png"/>
            </Wrap>
            <Wrap>
                <img src="/images/home-background.png"/>
            </Wrap>
            <Wrap>
                <img src="/images/home-background.png"/>
            </Wrap>
            <Wrap>
                <img src="/images/home-background.png"/>
            </Wrap>
            <Wrap>
                <img src="/images/home-background.png"/>
            </Wrap>
            <Wrap>
                <img src="/images/home-background.png"/>
            </Wrap>
            <Wrap>
                <img src="/images/home-background.png"/>
            </Wrap>
        </Content>
    </Container>
  )
}

export default Movies

const Container=styled.div`
   
`
const Content=styled.div`
  display:grid;
  grid-template-columns:repeat(4,minmax(0, 1fr));
  grid-gap:20px;
`
const Wrap=styled.div`
  cursor:pointer;
  border-radius:10px;
  overflow:hidden;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  transition:.0s cubic-bezier(.1,.7,.1,.1) all;

    img{
        width:100%;
        height:100%;
    }
    &:hover{
        transform:scale(1.05);
        border-color:rgba(249, 249, 249, 0.8);
    }
`