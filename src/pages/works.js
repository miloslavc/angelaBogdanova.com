import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

//utils
import { primaryBG, primary, mq } from "../utils"

function Works() {
  const [state, setState] = useState(0)
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allContentfulProjects(sort: { fields: title, order: ASC }) {
        edges {
          node {
            desc
            name
            title
            slug
            image {
              fluid(maxHeight: 1000) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            seo {
              desc
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Projects" />
      <Wrapper>
        <ListWrapper>
          {data.allContentfulProjects.edges.map(({ node }, index) => (
            <Link to={`/works/${node.slug}`} key={index}>
              <ListItems onMouseEnter={() => setState(index)}>
                <span className={index === state ? "active" : "inactive"}>
                  {node.title}
                </span>
              </ListItems>
            </Link>
          ))}
        </ListWrapper>
        {data.allContentfulProjects.edges.length && (
          <ImageWrapper>
            <Img
              fluid={data.allContentfulProjects.edges[state].node.image.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
            />
            <DetailsWrapper>
              <p>{data.allContentfulProjects.edges[state].node.title}</p>
              <p>{data.allContentfulProjects.edges[state].node.name}</p>
              <p>{data.allContentfulProjects.edges[state].node.desc}</p>
            </DetailsWrapper>
          </ImageWrapper>
        )}
      </Wrapper>
    </Layout>
  )
}

export default Works

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  min-height: 90vh;

  ${mq[2]} {
    grid-template-columns: 1fr 1.5fr;
    grid-gap: 2rem;
  }
`
const ImageWrapper = styled.div`
  display: none;
  ${mq[2]} {
    display: block;
    overflow: hidden;
    max-height: 70vh;
    width: 100%;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      background: ${primaryBG};
      opacity: 0.5;
      z-index: 99;
      top: 0;
      left: 0;
    }
  }
`

const ListWrapper = styled.ul`
  list-style: none;
  margin: 0 auto;
  display: grid;
  width: 90%;
  grid-template-rows: auto;
  grid-gap: 1rem;
  align-items: center;
  ${mq[2]} {
    width: 60%;
  }
`

const ListItems = styled.li`
  span {
    font-size: 1.8em;
    position: relative;
    color: ${primary};
    &:before {
      content: "";
      position: absolute;
      width: 0;
      height: 20px;
      background: ${primaryBG};
      z-index: -1;
      left: -4px;
      bottom: 4px;
      transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    &:hover {
      cursor: pointer;
      &:before {
        width: 105%;
      }
    }
  }
  .active {
    font-size: 2em;
    &:before {
      width: 105%;
    }
  }
`

const DetailsWrapper = styled.div`
  display: none;
  ${mq[2]} {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    transform: translateY(-50%);
    background: #fff;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    justify-items: center;
    z-index: 100;
    padding: 3rem 2rem;
    grid-gap: 1rem;
    p {
      color: ${primary};
      margin: 0;
    }
  }
`
