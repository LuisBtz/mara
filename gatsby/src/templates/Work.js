import * as React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout/layout'
import { Seo } from "../components/layout/seo";
import styled from "styled-components";

export default function WorkPost({ data: {mdx}, children }) {


  return (
    <Layout pageTitle="Home Page">
        <Container>
            <ContainerMain>
                <span>Circa {mdx.frontmatter.date}</span>
                <h1>{mdx.frontmatter.title}</h1>
                <span>{mdx.frontmatter.projectType}</span>
                <p>{mdx.frontmatter.description}</p>

                <p className="scroll">SCROLL TO SEE ALL SCREENS</p>
            </ContainerMain>
            <ContainerScroll>
                <div className='video'>
                    <iframe title="vimeo-player" src={`https://player.vimeo.com/video/${mdx.frontmatter.videoId}?h=71e4e9073e&autoplay=1`} frameBorder="0" fullscreen allow="autoplay" picture-in-picture allowFullScreen></iframe>
                </div>
                {children}
            </ContainerScroll>
        </Container>
    </Layout>
  )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    grid-gap: 50px;
    padding: 0px 50px 100px 50px;
    @media (max-width: 890px) {
        padding: 50px 20px 0 20px;
        grid-template-columns: 1fr;
    }
`

const ContainerMain = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
height: calc(60vh);
position: sticky;
top: 250px;
@media (max-width: 890px) {
    position: static;
    height: auto;
}
    p.scroll {
        font-size: 14px;
        margin-top: 150px;
        @media (max-width: 890px) {
            display: none;
        }
    }
    
    h1 {
        font-size: 5vw;
        font-family: var(--bold);
        font-weight: 700;
        text-transform: uppercase;
        line-height: 1;
        @media (max-width: 890px) {
            font-size: 8vw;
        }
    }
    span {
        font-size: 24px;
        margin: 10px;
    }
    p {
        margin-top: 50px;
        font-size: 1rem;
    }
`
const ContainerScroll = styled.section`
text-align: center;
font-weight: normal;
@media (max-width: 890px) {
    margin-bottom: 100px;
}
    h1, h2 {
        font-size: 5rem;
    }
    h3 {
        font-size: 4rem;
    }
    h3 {
        font-size: 3rem;
    }
    h4 {
        font-size: 2rem;
    }
    h5 {
        font-size: 1.5rem;
    }
    h6 {
        font-size: 1.2rem;
    }
    b, strong {
        font-family: var(--bold);
        font-weight: 700;
        text-transform: uppercase;
    }
    p {
        font-size: 1rem;
        padding: 15px 0;
    }
    div {
        margin: 50px 0 0 0;
    }
    .video {
        width: 100%;
        padding: 69.78% 0 0 0;
        position:relative;
        iframe {
            position:absolute;
            top:0;
            left:0;
            width:100%;
            height:100%;
        }
    }

`

export const query = graphql`
  query PostQuery($id: String) {
    mdx(id: { eq: $id }) {
        frontmatter {
            title
            slug
            date(formatString: "YYYY")
            projectType
            description
            videoId
        }
        body
        id
    }
  }
`

export const Head = ({data}) => (
    <Seo title={`${data.mdx.frontmatter.title} Project | Mara Osman` } description="Hello, nice to meet you!I'm MO.MA*" image='/home.png' />
  )