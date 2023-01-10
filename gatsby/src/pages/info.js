import React, { useState } from "react";
import Layout from '../components/layout/layout'
import { Seo } from "../components/layout/seo";
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const Container = styled.section`
  padding: 50px 50px 100px 50px;
  position: relative;
  margin-bottom: 50px;
  @media (max-width: 890px) {
    padding: 50px 20px 0 20px;
  }

h2 {
  font-size: 46px;
  font-family: var(--regular);
  width: 80%;
  margin: 0 auto;
  line-height: 1.5;
  letter-spacing: 3px;
  span {
    border: solid 3px black;
    padding: 1px 10px;
    border-radius: 20px;
    white-space:nowrap
  }

  img {
    vertical-align: middle;
  }

  img.mara {
    width: 80px;
  }

  img.monterrey {
    width: 120px;
  }

  img.computer {
    width: 80px;
  }

  img.letra {
    width: 40px;
  }

  img.toto {
    width: 80px;
  }

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
    bottom: 50px;
    right: 0px;
    transform: translateX(-50%);
    width: 15%;
  }
  .image2 {
    position: absolute;
    bottom: 50px;
    left: 50px;
    width: 10%;
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
  .image5 {
    position: absolute;
    bottom: -50px;
    right: 350px;
    width: 27%;
  }
  .image6 {
    position: absolute;
    bottom: -50px;
    right: 350px;
    width: 27%;
  }
  .image7 {
    position: absolute;
    bottom: -50px;
    right: 350px;
    width: 27%;
  }
  .image8 {
    position: absolute;
    bottom: -50px;
    right: 350px;
    width: 27%;
  }
}

`

const InfoPage = () => {

  const [images, setImages] = useState(false);
  const [moma, setMoma] = useState(false);




  return (
    <Layout pageTitle="Home Page">
      <Container>
        <h2>I'm Mara<img className="mara" src="/mara.png" alt='mata icon' />, a <span>digital designer</span> based in Monterrey, Mexico<button onMouseEnter={() => setImages(true)} onMouseLeave={() => setImages(false)} className='cerro'><img className="monterrey" src="/monterrey.png" alt='monterrey icon' /></button> “The city of mountains”. Mostly interested with playing with<img className="computer" src="/compu.png" alt='computer icon' />digital and <img className="letra" src="/letra.png" alt='Letra icon' /> type design as my main forms of expression, currently exploring new ways to play with technology. I have a dog named Totopo, <img className="toto" src="/toto.png" alt='toto icon' /> he looks like a Mini Chewbacca .</h2>
        {images ? 
        <div className='images'>
          <div className='image1'>
            <img src='/info1.png' alt='Fallon' />
          </div>
          <div className='image2'>
            <img src='/info2.png' alt='Fallon' />
          </div>
          <div className='image3'>
            <img src='/info3.png' alt='Fallon' />
          </div>
          <div className='image4'>
            <img src='/info4.png' alt='Fallon' />
          </div>
          <div className='image5'>
            <img src='/info5.png' alt='Fallon' />
          </div>
          <div className='image6'>
            <img src='/info6.png' alt='Fallon' />
          </div>
          <div className='image7'>
            <img src='/info7.png' alt='Fallon' />
          </div>
          <div className='image8'>
          <img src='/info8.png' alt='Fallon' />
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
  <Seo title="Info | Mara Osman" description="Hello, nice to meet you!I'm MO.MA*" image='/home.png' />
)
export default InfoPage