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
    padding: 0px 20px 0 20px;
  }

h2 {
  font-size: 2.8vw;
  font-family: var(--regular);
  width: 84%;
  margin: 0 auto;
  line-height: 1.5;
  letter-spacing: 3px;
  @media (max-width: 920px) {
    width: 90%;
    line-height: 2.5;
  }
  @media (max-width: 890px) {
      font-size: 2rem;
      width: 95%;
      text-align: center;
  }

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



  .hello {
    cursor: pointer;
  }

  button {
    font-family: var(--bold);
    font-weight: 700;
  }

}
.moma {
  position: fixed;
  top: 0px;
  left: 0;
  height: 100vh;
  z-index: -1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 80%;
  left: 50%;
  transform: translateX(-50%);
  justify-content: center;
  align-items: center;
  @media (max-width: 890px) {
    grid-template-columns: repeat(2, 1fr);

  }
  .image {
    width: 50%;
    align-self: center;
    justify-self: center  ;
  }
}
.images {
  position: fixed;
  top: 0px;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: -1;
  .image1 {
    position: absolute;
    bottom: 50px;
    right: 50px;
    transform: translateX(-50%);
    width: 15%;
  }
  .image2 {
    position: absolute;
    bottom: 50px;
    left: 50px;
    width: 20%;
  }
  .image3 {
    position: absolute;
    top: 50px;
    transform: translateX(-50%);
    left: 50%;
    width: 14%;
  }
  .image4 {
    position: absolute;
    top: 150px;
    right: 100px;
    width: 30%;
  }
  .image5 {
    position: absolute;
    bottom: 50px;
    left: 20%;
    width: 27%;
  }
  .image6 {
    position: absolute;
    top: 50px;
    left: 50px;
    width: 13%;
  }
  .image7 {
    position: absolute;
    bottom: 30%;
    right: 20%;
    width: 15%;
    z-index: 1;
  }
  .image8 {
    position: absolute;
    bottom: 10%;
    right: 30%;
    width: 12%;
  }
}

`

const InfoPage = () => {

  const [images, setImages] = useState(false);
  const [moma, setMoma] = useState(false);




  return (
    <Layout pageTitle="Home Page">
      <Container>
        <h2>I'm Mara<img className="mara" src="/mara.png" alt='mata icon' />, a <span>digital designer</span> based in Monterrey, Mexico<button onMouseEnter={() => setImages(true)} onMouseLeave={() => setImages(false)} className='cerro'><img className="monterrey" src="/monterrey.png" alt='monterrey icon' /></button> “The city of mountains”. Mostly interested with playing with<img className="computer" src="/compu.png" alt='computer icon' />digital and <img className="letra" src="/letra.png" alt='Letra icon' /> type design as my main forms of expression, currently exploring new ways to play with technology. I have a dog named Totopo, <button onMouseEnter={() => setMoma(true)} onMouseLeave={() => setMoma(false)} ><img className="toto" src="/toto.png" alt='toto icon' /></button>he looks like a Mini Chewbacca .</h2>
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
            <div className="image">
              <StaticImage
                  src="../assets/images/toto1.png"
                  alt="Toto 1"
                  placeholder="blurred"
                  layout="fullWidth"
              />
            </div>
            <div className="image">
              <StaticImage
                  src="../assets/images/toto2.png"
                  alt="Toto 1"
                  placeholder="blurred"
                  layout="fullWidth"
              />
            </div>
            <div className="image">
              <StaticImage
                  src="../assets/images/toto3.png"
                  alt="Toto 1"
                  placeholder="blurred"
                  layout="fullWidth"
              />
            </div>
            <div className="image">
              <StaticImage
                  src="../assets/images/toto4.png"
                  alt="Toto 1"
                  placeholder="blurred"
                  layout="fullWidth"
              />
            </div>
            <div className="image">
              <StaticImage
                  src="../assets/images/toto5.png"
                  alt="Toto 1"
                  placeholder="blurred"
                  layout="fullWidth"
              />
            </div>
            <div className="image">
              <StaticImage
                  src="../assets/images/toto6.png"
                  alt="Toto 1"
                  placeholder="blurred"
                  layout="fullWidth"
              />
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