import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

//utils
import { primary, primaryBG } from "../utils"

//elements
import { PrimaryButton } from "../elements"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Wrapper>
      <DivStyled>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... go back to safety</p>
      </DivStyled>
      <Link to="/">
        <PrimaryButton>Go Back</PrimaryButton>
      </Link>
    </Wrapper>
  </Layout>
)

export default NotFoundPage

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90vh;
`

const DivStyled = styled.div`
  background: ${primaryBG};
  text-align: center;
  padding: 4rem 2rem;
  color: ${primary};
  margin-bottom: 2rem;
  h1 {
    font-size: 4em;
  }
  p {
    font-size: 1.2em;
  }
`
