import React, { useState } from "react";
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Header = () => {

    const [ham, setHam] = useState(false);

    return(
        <HeaderContainer>
            <button className={ham ? 'ham active' : 'ham'} onClick={() => setHam(!ham)}>
                <div className='line'></div>
                <div className='line'></div>
            </button>
            <Link className='logo' to='/'>
                <StaticImage
                    src="../../assets/images/logo.png"
                    alt="Mara Osman"
                    placeholder="blurred"
                    layout="fullWidth"
                />
            </Link>
            <ul className={ham ? 'links open' : 'links ham'} >
                <li>
                    <Link to='/work'>WORK</Link>
                </li>
                <li>
                    <Link to='/playground'>PLAYGROUND</Link>
                </li>
                <li>
                    <Link to='/info'>INFO</Link>
                </li>
            </ul>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.nav`
padding: 56px 50px;
width: 100%;
display: flex;
justify-content: space-between;
position: relative;
align-items: center;
z-index: 2;
@media (max-width: 890px) {
    padding: 56px 20px;
}


button.ham {
    display: none;
    width: 50px;
    height: 30px;
    position: absolute;
    right: 20px;
    z-index: 2;
    @media (max-width: 890px) {
        display: block;
    }
    .line {
        width: 100%;
        height: 1px;
        background-color: var(--black);
        margin-bottom: 13px;
        position: relative;
        transition: all 250ms ease-in-out;
        :nth-child(1) {
            top: 5px;
        }
        :nth-child(2) {
            top: 5px;
        }
    }
}

.active {
    .line {
        :nth-child(1) {
            top: 13px !important;
            transform: rotate(35deg);
        }
        :nth-child(2) {
            top: 0px !important;
            transform: rotate(-35deg);
        }
    }
}
    .logo {
        width: 346px;
        @media (max-width: 550px) {
            width: 220px;
        }
    }


    .open {
        right: 0 !important;
    }
    .links {
        li {
            display: inline-block;
            margin-left: 20px;
            a {
                font-size: 20px;
                padding: 5px 20px;
                border-radius: 17px;
                border: solid 3px black;
                &:hover {
                    background-color: black;
                    color: white;
                }
            }
        }
        @media (max-width: 890px) {
            display: block;
            position: absolute;
            width: 100vw;
            height: 100vh;
            background-color: rgba(255, 255, 255, 0.9);
            top: 0;
            z-index: 1;
            right: -100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 1;
            transition: right 350ms ease-in-out;
            li {
                margin-top: 30px;
                margin-bottom: 30px;
                a {
                    border: none;
                    font-size: 2rem;
                }
            }
        }
    }
`

export default Header