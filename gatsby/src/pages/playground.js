import React, {useRef} from "react";
import Layout from '../components/layout/layout'
import { Seo } from "../components/layout/seo";
import styled from 'styled-components'
import HEAD from "../sketches/HEAD.js";


const Container = styled.section`
padding: 50px 50px 0 50px;
height: 60vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 100px;
h1 {
  margin-top: 230px;
    font-size: 82px;
    font-family: var(--bold);
    font-weight: 700;
}

h2 {
  margin-top: 150px;
  font-size: 82px;
  font-family: var(--bold);
  font-weight: 700;
}

p {
  margin-top: 30px;
  font-size: 28px;
  text-align: center;
  margin-left: 200px;
  margin-right: 200px;
  
}

p.scroll {
  font-size: 14px;
  margin-top: 50px;
  @media (max-width: 890px) {
      display: none;
  }
}

@media (max-width: 890px) {
  padding: 50px 20px 0 20px;
}



`

const PlaygroundPage = () => {

const sketchRef = useRef(HEAD);


  return (
    <Layout pageTitle="Home Page">
      <Container>
        <h1>PLAYGROUND</h1>
        <p>In this page lives all of the things I create while 
          playing with new forms of expressing my ideas, 
          exploring new hobbies or working on fun projects.</p>
        <p className="scroll">SCROLL DOWN TO EXPLORE</p>

         <h2>P5.JS</h2>
        <p>Had the amazing opportunity to take a quick workshop with Spacetype, Lynne and Kevin, on Generative Type. 
          I've always been curious about programming and what better way to start exploring this than combining it with my passion for type. 
          This exercise where made during this workshop, and I'm currently enrolled in the Intro to Generative Type class in Type Electives!</p>

          <div className="sketch" ref={{sketchRef}}></div>
      </Container>

  
      
      
    
    </Layout>
  )
}



export const Head = () => (
  <Seo title="Playground | Mara Osman" description="Hello, nice to meet you!I'm MO.MA*" image='/home.png' />
)
export default PlaygroundPage