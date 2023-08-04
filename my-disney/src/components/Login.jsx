import React from 'react'
import styled from "styled-components"

const Login = () => {
  return (
    <Container>
        <CTA>     
         <CTAOne src='/images/cta-logo-One.svg'/>
         <SignUp> 
            GET ALL THERE 
         </SignUp>
         <Desc>
            Get premiere Access to Raya and the Last Dragon for Disney+ subscription.As of 03/27/23,the price is increased by 51. 
         </Desc>
         <CTATwo src='/images/cta-logo-two.png'/>
        </CTA>
       
    </Container>
  )
}

export default Login

const Container=styled.div`
  display:flex;
  align-items:top;
  justify-content:center;
  position:relative;
  height: calc(100vh-70px);

  &:before{
    background-position:top;
    background-size:cover;
    background-repeat: no-repeat;
    position:absolute;
    content:"";
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:-1;
    background-image:url("/images/login-background.jpg");
  }
`
const CTA=styled.div`
  max-width:650px;
  padding:50px 40px;
  width:70%;
  display:flex;
  flex-direction:column;
  align-items:center;
`
const CTAOne=styled.img`
 
`
const SignUp=styled.a`
  width:100%;
  background-color:#0063e5;
  font-weight:bold;
  padding:15px 0;
  color:#f9f9f9;
  border-radius:4px;
  text-align:center;
  font-size:18px;
  cursor:pointer;
  transition:all 250ms;
  letter-spacing:1.5px;
  margin-top:8px;
  margin-bottom:12px;

  &:hover{
    background:#0483ee;
  }

`
const Desc=styled.p`
 font-size:10px;
 letter-spacing:1.5px;
 line-height:1.5;
 text-align:center;

`
const CTATwo=styled.img`
  width:90%;

`