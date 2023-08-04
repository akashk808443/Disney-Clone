import React from 'react'
import styled from "styled-components"
const Details = () => {
  return (
    <Container>
      <Background>
        <img src='/images/login-background.jpg'/>
      </Background>
      <ImgTitle>
        <img src='/images/viewers-disney.png'/>
      </ImgTitle>
      <Controls>
         <PlayButton>
           <img src='/images/play-icon-black.png'/>
           <span>Play</span>
         </PlayButton>
         <TrailerButton>
           <img src='/images/play-icon-white.png'/>
           <span>Trailer</span>
         </TrailerButton>
         <AddButton>
           <span>+</span>
         </AddButton>
         <GroupButton>
           <img src='/images/group-icon.png'/>
         </GroupButton>
      </Controls>
      <SubTitle>
        2018 . 7m . Family, Fantasy, Kids, Animation
      </SubTitle>
      <Desc>
        A Chinese mom who's sad when her grown son leaves home gets another chance at motherhood when one of her dumplings springs to life.But she finds that nothing stays cute and small forever.
      </Desc>
    </Container>
  )
}

export default Details

const Container=styled.div`
  min-height:calc(100vh-70px);
  padding:0 calc(3.5vw-5px);
  position:relative;
  margin-left:25px;
`
const Background=styled.div`
  position:fixed;
  top:0;
  left:0;
  bottom:0;
  right:0;
  z-index:-1;
  opacity:0.8;

  img{
    width:100%;
    height:100%;
    object-fit:cover;

  }
`
const ImgTitle=styled.div`
  height:30vh;
  min-height:170px;
  width:35vw;
  min-width:200px;
  img{
    width:100%;
    height:100%;
    object-fit:contain;
  }
`
const Controls=styled.div`
  display:flex;

`
const PlayButton=styled.button`
  border-radius:4px;
  height:56px;
  padding:0px 24px;
  margin-right:22px;
  font-size:15px;
  left-spacing:1.8px;
  display:flex;
  align-items:center;
  border:none;
  background:rgb(249, 249, 249);
  cursor:pointer;

  &:hover{
    background:rgb(198, 198, 198);
  }
`
const TrailerButton=styled(PlayButton)`
  background:rgb(0, 0, 0, 0.3);
  border:1px solid rgb(249,249,249);
  text-transform:uppercase;
  color:white;
`
const AddButton=styled.button`
  margin-right:16px;
  width:44px;
  height:44px;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:50%;
  border:2px solid white;
  background-color:rgba(0, 0, 0, 0.6);
  cursor:pointer;
  span{
    font-size:30px;
    color:white;
  }
`
const GroupButton=styled(AddButton)`
  background:rgb(0, 0, 0);
`
const SubTitle=styled.div`
  color:rgb(249,249,249);
  font-size:15px;
  min-height:20px;
  margin-top:26px;

`
const Desc=styled.div`
 line-height:1.4;
 font-size:20px;
 margin-top:16px;
 color:rgb(249,249,249);
`