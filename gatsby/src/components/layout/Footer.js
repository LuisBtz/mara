import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return(
        <FooterContainer>
            <ul>
                <li>
                    Follow Me: <a target='_blank' rel="noreferrer" href='https://www.instagram.com/mo.ma.94/'>@MO.MA.DESIGN</a>
                </li>
                <li>
                    Mail Me: <a href='mailto:maraosman94@hotmail.com'>maraosman94@hotmail.com</a>
                </li>
                <li>
                    © MARA OSMAN 2022
                </li>
            </ul>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
    padding: 0 50px 50px 50px;
    margin-top: 0px;
    @media (max-width: 890px) {
        padding: 0 20px;
        margin-bottom: 20px;
        text-align: center;
    }
    ul {
        display: flex;
        justify-content: space-between;
        @media (max-width: 890px) {
            flex-direction: column;
        }
        li {
            font-size: 18px;
            @media (max-width: 890px) {
                margin-bottom: 20px;
            }
        }
    }
`

export default Footer