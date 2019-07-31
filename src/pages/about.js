import React from "react"
import styled from "@emotion/styled"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

//elements
import { primaryBG, primary, secondary, black, gray, mq } from "../utils"

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      allContentfulAbout {
        edges {
          node {
            title
            name
            desc {
              desc
            }
            profileImage {
              fluid(maxWidth: 1080, quality: 100) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
      allContentfulSkills(sort: { fields: title, order: ASC }) {
        edges {
          node {
            title
            value
            id
          }
        }
      }
      allContentfulPersonalInfo(sort: { fields: title, order: ASC }) {
        edges {
          node {
            title
            value
            id
            desc
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="About me" />
      <Wrapper>
        <ImageHeader>
          <Img
            fluid={data.allContentfulAbout.edges[0].node.profileImage.fluid}
          />
        </ImageHeader>
        <Content>
          {data.allContentfulAbout.edges.map(({ node }) => (
            <div key={node.title}>
              {/* <h1>{node.title}</h1> */}
              <h1>{node.name}</h1>
              <p>{node.desc.desc} </p>
            </div>
          ))}
        </Content>
        <SkillsWrapper>
          {data.allContentfulSkills.edges.map(({ node }) => (
            <div key={node.id}>
              <p>{node.title}</p>
              <p>{node.value}% </p>
              <Progress value={node.value} />
            </div>
          ))}
        </SkillsWrapper>
        <Quote>
          <p>
            I’m well versed in taking a client’s vision and helping turn that
            into a living breathing entity, from start through the end of the
            project. My real value comes from years of hands-on experience as an
            Architect / Designer , both working on design in-house, and working
            independently with clients, uniquely positioning me to provide the
            kind of holistic design solutions that are typically expected to
            require a larger design firm.
          </p>
        </Quote>

        <PersonalWrapper>
          {data.allContentfulPersonalInfo.edges.map(({ node }) => (
            <div key={node.id}>
              <p className="title">{node.title}</p>
              {node.value !== null ? (
                node.value.map(value => (
                  <p className="value" key={value}>
                    {value}
                  </p>
                ))
              ) : (
                <p className="desc">{node.desc} </p>
              )}
            </div>
          ))}
        </PersonalWrapper>
      </Wrapper>
    </Layout>
  )
}

export default About

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 3rem;
`
const Content = styled.article`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 80%;
  margin: 0 auto;
  h1 {
    font-size: 2em;
    margin-bottom: 3rem;
    color: ${black};
  }
  p {
    font-size: 1.2em;
    line-height: 1.4em;
    color: ${gray};
  }
`
const ImageHeader = styled.article`
  width: 100%;
  z-index: 10;
  justify-self: center;
  align-self: center;
  max-height: 80vh;
  overflow: hidden;
  img {
    object-fit: contain;
    object-position: center;
  }
`

const SkillsWrapper = styled.article`
  color: ${primary};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  width: 80%;
  margin: 3em auto 5em;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    p {
      font-size: 1.25em;
    }
  }
  ${mq[1]} {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem 3rem;
  }
`
const Progress = styled.span`
  position: absolute;
  height: 4px;
  width: 100%;
  background: ${primaryBG};
  bottom: 15px;
  &:after {
    content: "";
    position: absolute;
    height: 100%;
    background: ${primary};
    animation-delay: 500ms;
    animation-duration: 500ms;
    animation-name: slidein;
    animation-direction: normal;
    animation-fill-mode: both;
  }
  @keyframes slidein {
    from {
      width: 0;
    }
    to {
      width: ${({ value }) => value}%;
    }
  }
`

const PersonalWrapper = styled.article`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  width: 80%;
  margin: 5em auto;

  .title {
    font-size: 1.25em;
    margin-bottom: 0.2em;
  }

  .value {
    margin-bottom: 0.2em;
    color: ${gray};
  }

  .desc {
    margin-bottom: 0.2em;
    color: ${gray};
  }

  ${mq[1]} {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem 3rem;
  }
`

const Quote = styled.article`
  background: ${secondary};
  padding: 3rem;
  text-align: center;
  p {
    color: ${primary};
    width: 80%;
    margin: 3em auto;
    font-size: 1.25em;
  }
`
