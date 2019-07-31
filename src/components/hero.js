import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "@emotion/styled"

//elements
import { PrimaryButton } from "../elements"

//utils
import { primary, primaryBG, mq, gray } from "../utils"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      allContentfulHome {
        edges {
          node {
            title
            desc
            name
            id
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <ContentWrapper>
        {data.allContentfulHome.edges.map(({ node }) => (
          <Content key={node.id}>
            <h2>
              <mark>{node.name}</mark>
            </h2>
            <h1>
              <mark>{node.title}</mark>
            </h1>
            <p>{node.desc}</p>
          </Content>
        ))}
        <Link to="/about">
          <PrimaryButton>about</PrimaryButton>
        </Link>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Hero

const Wrapper = styled.section`
  min-height: 70vh;
  width: 90%;
  margin: 0em auto;
  padding-top: 5rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`

const ContentWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`

const Content = styled.div`
  h1 {
    font-size: 5em;
    line-height: 1.6;
    color: ${primary};
    mark {
      color: ${primary};
      background: ${primaryBG};
    }
  }
  h2 {
    color: ${primary};
    margin-bottom: 0.5rem;
    mark {
      color: ${primary};
      background: ${primaryBG};
    }
  }
  p {
    margin: 2em 0;
    font-size: 1.2em;
    color: ${gray};
  }

  ${mq[0]} {
    max-width: 60%;
  }
`
