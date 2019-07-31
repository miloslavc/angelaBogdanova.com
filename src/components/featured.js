import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

//elements
import { PrimaryButton } from "../elements"

//utils
import { primary, primaryBG, mq, gray } from "../utils"

function Featured() {
  const data = useStaticQuery(graphql`
    query FeaturedQuery {
      allContentfulFeatured(sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
            projects {
              desc
              title
              slug
              image {
                fluid(maxWidth: 1280) {
                  ...GatsbyContentfulFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `)
  const featured = data.allContentfulFeatured.edges
  return (
    <section>
      {featured.map(({ node }) => (
        <WrapperStyled key={node.projects[0].title}>
          <ProjectDesc>
            <h1>
              <mark>{node.projects[0].title}</mark>
            </h1>
            <p>{node.projects[0].desc}</p>
            <Link to={`/works/${node.projects[0].slug}`}>
              <PrimaryButton>Read More</PrimaryButton>
            </Link>
          </ProjectDesc>
          <ProjectImage>
            <Img fluid={node.projects[0].image.fluid} />
          </ProjectImage>
        </WrapperStyled>
      ))}
      <ButtonWrapper>
        <Link to="/works/">
          <PrimaryButton>See All Projects</PrimaryButton>
        </Link>
      </ButtonWrapper>
    </section>
  )
}

export default Featured

const WrapperStyled = styled.article`
  width: 90%;
  margin: 2em auto;
  display: grid;
  align-items: center;
  grid-template-rows: 1fr auto;

  ${mq[1]} {
    grid-template-columns: repeat(6, 1fr);
    &:nth-of-type(even) {
      div:first-of-type {
        grid-column: 4/7;
        text-align: end;
        justify-items: end;
      }
      div:last-of-type {
        grid-column: 1/5;
      }
    }
    :last-of-type {
      margin-bottom: 2em;
    }
  }

  ${mq[2]} {
    margin: 8em auto;
  }
`

const ProjectDesc = styled.div`
  width: 100%;
  z-index: 10;
  display: grid;
  align-items: center;
  justify-items: start;
  padding-bottom: 1rem;

  h1 {
    font-size: 7vw;
    position: relative;
    line-height: 1.6;
    margin: 0;

    mark {
      color: ${primary};
      background: ${primaryBG};
      word-break: normal;
    }
  }
  p {
    font-size: 1.2em;
    color: ${gray};
    background: #fff;
    display: inline-block;
    margin-bottom: 0.2em;
  }
  ${mq[1]} {
    grid-column: 1/4;
    grid-row: 1;
    padding-bottom: 0;
    p {
      margin-bottom: 0.5em;
    }
  }
`

const ProjectImage = styled.div`
  width: 100%;
  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }
  ${mq[1]} {
    grid-column: 3/7;
    grid-row: 1;
  }
`

const ButtonWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  padding: 3rem;
`
