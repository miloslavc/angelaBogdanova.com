import React from "react"
import styled from "@emotion/styled"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

//utils
import { gray } from "../utils"

//elements
import { PrimaryButton } from "../elements"

function Project({ data, pageContext }) {
  const { next, prev } = pageContext
  const projectData = data.contentfulProjects
  return (
    <Layout>
      <SEO title={` ${projectData.seo.title}`} />
      <Wrapper>
        <Details>
          <h1>{projectData.title}</h1>
          <p>{projectData.name}</p>
          <p>{projectData.desc}</p>
        </Details>

        <Img fluid={projectData.image.fluid}></Img>
        {projectData.gallery &&
          projectData.gallery.map(node => [
            <Img key={node.id} fluid={node.fluid}></Img>,
          ])}

        <Nav>
          <Link className={prev ? "active" : "hidden"} to={`/works/${prev}`}>
            <PrimaryButton>Perv</PrimaryButton>
          </Link>
          <Link to="/works">
            <PrimaryButton>All</PrimaryButton>
          </Link>
          <Link className={next ? "active" : "hidden"} to={`/works/${next}`}>
            <PrimaryButton>Next</PrimaryButton>
          </Link>
        </Nav>
      </Wrapper>
    </Layout>
  )
}

export default Project
export const query = graphql`
  query($slug: String!) {
    contentfulProjects(slug: { eq: $slug }) {
      desc
      name
      title
      seo {
        desc
        title
        keywords
      }
      image {
        fluid(quality: 100, maxWidth: 900) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      gallery {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid_withWebp
        }
        id
      }
    }
  }
`
const Wrapper = styled.div`
  width: 70%;
  margin: 3rem auto;
  display: grid;
  grid-template-rows: auto;
  grid-gap: 2rem;
`
const Details = styled.div`
  display: grid;
  p {
    margin-bottom: 0.2rem;
    color: ${gray};
  }
`

const Nav = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  .hidden {
    opacity: 0.3;
    pointer-events: none;
  }
`
