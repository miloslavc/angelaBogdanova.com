import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

//utils
import { primary, primaryBG } from "../utils"

//elements
import { PrimaryButton } from "../elements"

function Success() {
  return (
    <Layout>
      <SEO title="Success" />
      <Wrapper>
        <DivStyled>
          <h1>Thank you!</h1>
          <p>Your submission has been received.</p>
        </DivStyled>
        <Link to="/">
          <PrimaryButton>Go Back</PrimaryButton>
        </Link>
      </Wrapper>
    </Layout>
  )
}

export default Success

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 90vh;
`

const DivStyled = styled.div`
  background: ${primaryBG};
  text-align: center;
  padding: 4rem;
  color: ${primary};
  margin-bottom: 2rem;
  h1 {
    font-size: 4em;
  }
  p {
    font-size: 1.2em;
  }
`
