import React from "react";
import styled from 'styled-components'
import Layout from '../components/layout/layout'
import { Seo } from "../components/layout/seo";
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
export const pageQuery = graphql`
  query {
    allMdx(sort: {frontmatter: {date: DESC}}) {
      nodes {
        id
        frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            slug
            
            featuredImage {
                childImageSharp {
                    gatsbyImageData(
                    layout: FULL_WIDTH
                    outputPixelDensities: 1.5
                    placeholder: DOMINANT_COLOR
                    )
                }
            }
            featuredGif {
                publicURL
            }
        }
      }
    }
  }
`


const WorkPage = ({data}) => {

    const posts = data.allMdx.nodes


  return (
    <Layout pageTitle="Home Page">
      <Container>

      {posts.map(post => {
            let featuredImg1 = getImage(post.frontmatter.featuredImage?.childImageSharp?.gatsbyImageData)
          const title = post.frontmatter.title 

          return (
            <article key={post.id}>
                <Link to={`/work${post.frontmatter.slug}`}>
                    <div className="image1">
                        <GatsbyImage 
                        alt={`Thumbnail ${title}`}
                            image={featuredImg1} 
                            style={{ height: "100%", width: "auto", objectFit: 'cover' }}
                        />
                    </div>
                    <div className="image2">
                        <img src={post.frontmatter.featuredGif.publicURL} alt={title} />
                    </div>
                </Link>
            </article>

          )
        })}
        
      </Container>
    </Layout>
  )
}

const Container = styled.section`
  padding: 50px 50px 0 50px;
  position: relative;
  margin-bottom: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  z-index: 1;
  @media (max-width: 890px) {
    padding: 50px 20px 0 20px;
  }
  article {
    height: auto;
    width: 100%;
    position: relative;
    cursor: pointer;
    a {
      width: auto;
      height: 100%;
      display: block;
      background-color: pink;
    }
    .image1 {
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 2;
        &:hover {
            opacity: 0;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
    }
    .image2 {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        

        img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
    }
  }

`

export const Head = () => (
  <Seo title="Work | Mara Osman" description="Hello, nice to meet you!I'm MO.MA*" image='/home.png' />
)
export default WorkPage