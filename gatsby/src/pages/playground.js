import React from "react";
import Layout from '../components/layout/layout'
import { Seo } from "../components/layout/seo";
import styled from 'styled-components'

const Container = styled.section`
padding: 50px 50px 0 50px;
height: 60vh;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 100px;
h1 {
    font-size: 10vw;
    font-family: var(--bold);
    font-weight: 700;
}

@media (max-width: 890px) {
  padding: 50px 20px 0 20px;
}
`

const PlaygroundPage = () => {



  return (
    <Layout pageTitle="Home Page">
      <Container>
        <h1>SOON</h1>
        
      </Container>
    </Layout>
  )
}



export const Head = () => (
  <Seo title="Playground | Mara Osman" description="Hello, nice to meet you!I'm MO.MA*" image='/home.png' />
)
export default PlaygroundPage