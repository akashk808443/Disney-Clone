import React from 'react'
import styled from "styled-components"
const Navbar = () => {
  return (
    <Nav>
        <Logo src="/images/logo.svg"/>
        <NavMenu>
            <a>
                <img src="/images/home-icon.svg"/>
                <span>Home</span>
            </a>
            <a>
                <img src="/images/search-icon.svg"/>
                <span>Search</span>
            </a>
            <a>
                <img src="/images/watchlist-icon.svg"/>
                <span>Watchlist</span>
            </a>
            <a>
                <img src="/images/original-icon.svg"/>
                <span>Original</span>
            </a>
            <a>
                <img src="/images/movie-icon.svg"/>
                <span>Movies</span>
            </a>
            <a>
                <img src="/images/series-icon.svg"/>
                <span>Series</span>
            </a>
        </NavMenu>
        <UserImg src="https://avatars.githubusercontent.com/u/98854085?v=4"/>
    </Nav>
  )
}

export default Navbar

const Nav=styled.div`
    height:60px;
    background:#090b13;
    display:flex;
    align-items:center;
    padding: 0 35px;
`
const Logo=styled.img`
  width:80px;
`
const NavMenu=styled.div`
   display:flex;
   flex:1;
   align-items:center;
   margin-left:30px;
   a{
    display:flex;
    align-items:center;
    padding:0 12px;
    cursor:pointer;
    img{
        height:20px;
    }
    span{
        font-size:13px;
        letter-spacing:1.40px;
        position:relative;

        &:after{
            content:'';
            height:2px;
            position:absolute;
            background:white;
            bottom:-6px;
           // left:calc(50% - 10px);
            left:0;
            right:0;
            //border-bottom:solid #fff ;
            transform:scaleX(0);
            transition:.0s cubic-bezier(.1,.7,.1,.1) all;
            opacity:0;
        }
    }
    &:hover{
        span:after{
            transform:scaleX(1);
            opacity:1;
        }
    }
   }
`
const UserImg=styled.img`
   height:45px;
   width:45px;
`
