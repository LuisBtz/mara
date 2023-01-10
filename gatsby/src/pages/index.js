import React, { useState } from "react";
import Layout from '../components/layout/layout'
import { Seo } from "../components/layout/seo";
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const Container = styled.section`
padding: 50px 50px 0 50px;
position: relative;
margin-bottom: 50px;
@media (max-width: 890px) {
  padding: 50px 20px 0 20px;
}
h1 {
  font-size: 11vw;
  font-family: var(--bold);
  font-weight: 700;
  @media (max-width: 890px) {
      font-size: 5rem;
  }
  @media (max-width: 448px) {
      font-size: 3.5rem;
  }
  .hello {
    cursor: pointer;
  }
  button {
    font-family: var(--bold);
    font-weight: 700;
  }
}
.moma {
  .mara {
    position: absolute;
    right: 100px;
    bottom: 170px;
    width: 30vw;
  }
  .theDesigner {
    width: 275px;
    text-align: center;
    border: solid 3px black;
    border-radius: 20px;
    padding: 20px;
    box-sizing: content-box;
    position: relative;
    bottom: 30px;
    p {
      font-size: 1.5vw;
    }
  }
}
.images {
  .image1 {
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    width: 30%;
  }
  .image2 {
    position: absolute;
    bottom: 0px;
    left: 100px;
    width: 20%;
  }
  .image3 {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 50px;
    width: 22%;
  }
  .image4 {
    position: absolute;
    bottom: -50px;
    right: 350px;
    width: 27%;
  }
}

`

const IndexPage = () => {

  const [images, setImages] = useState(false);
  const [moma, setMoma] = useState(false);




  return (
    <Layout pageTitle="Home Page">
      <Container>
        <h1><button onMouseEnter={() => setImages(true)} onMouseLeave={() => setImages(false)} className='hello'>Hello</button>, nice <br/>to meet you! <br/>I'm <button onMouseEnter={() => setMoma(true)} onMouseLeave={() => setMoma(false)} >MO.MA*</button></h1>
        {images ? 
        <div className='images'>
          <div className='image1'>
            <img src='/image1.gif' alt='Fallon' />
          </div>
          <div className='image2'>
            <img src='/image2.gif' alt='Cat' />
          </div>
          <div className='image3'>
            <img src='/image3.gif' alt='Rafita' />
          </div>
          <div className='image4'>
            <img src='/image4.gif' alt='Clouds' />
          </div>
        </div>
        : 
        ''
      }
      {
        moma ?
          <div className="moma">
            <div className="mara">
              <StaticImage
                  src="../assets/images/moma.png"
                  alt="Mara Osman"
                  placeholder="blurred"
                  layout="fullWidth"
              />
            </div>
            <div className="theDesigner">
              <p>* The designer named Mara Osman, not to be confused with the museum.</p>
            </div>
          </div>
          :
          ''
      }
      
        
      </Container>
    </Layout>
  )
}



export const Head = () => (
  <Seo title="Mara Osman" description="Hello, nice to meet you!I'm MO.MA*" image='/home.png' />
)
export default IndexPage