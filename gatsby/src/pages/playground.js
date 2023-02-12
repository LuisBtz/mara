import React, {useRef} from "react";
import Layout from '../components/layout/layout'
import { Seo } from "../components/layout/seo";
import styled from 'styled-components'
import p5 from "p5";

// Aquí metes el archivo de tu sketch
import sketch from "../sketches/sketch";

const Container = styled.section`
padding: 50px 50px 0 50px;
height: 60vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 100px;
h1 {
    font-size: 10vw;
    font-family: var(--bold);
    font-weight: 700;
}

.p5-js {
  width: 50vw;
  height: 50vh;
  position: fixed;
}

@media (max-width: 890px) {
  padding: 50px 20px 0 20px;
}
`

const PlaygroundPage = () => {

  const sketchRef = useRef(sketch);

  return (
    <Layout pageTitle="Home Page">
      <Container>
        <h1>SOON</h1>
        <p>Aquí metes tus cosas</p>
        <div className="p5-js" ref={{sketchRef}}></div>
      </Container>
    </Layout>
  )
}



export const Head = () => (
  <Seo title="Playground | Mara Osman" description="Hello, nice to meet you!I'm MO.MA*" image='/home.png' />
)
export default PlaygroundPage