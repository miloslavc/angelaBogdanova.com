import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

//utils
import { primary, mq } from "../utils"

//elements
import { PrimaryButton } from "../elements"
//components
import Form from "../components/form"

function Contact() {
  return (
    <Layout>
      <SEO title="Contact" />
      <Wrapper>
        <ContactDetails>
          <h1>let's talk.</h1>
          <a href="mailto:info@angelabogdanova.com" rel="noopener noreferrer">
            <PrimaryButton>info@angelabogdanova.com</PrimaryButton>
          </a>

          <a
            target="_black"
            href="https://www.linkedin.com/in/anzhelabogdanova/?locale=en_US"
            rel="noopener noreferrer"
          >
            <PrimaryButton>linkedin</PrimaryButton>
          </a>
          <a
            target="_black"
            href="https://www.behance.net/anzhela_b"
            rel="noopener noreferrer"
          >
            <PrimaryButton>behance</PrimaryButton>
          </a>

          <p>
            If you have a project in mind,
            <br /> send me a short description about your idea.
          </p>
        </ContactDetails>
        <Form />
      </Wrapper>
    </Layout>
  )
}

export default Contact

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  margin: 0 auto;
  width: 90%;
  min-height: 90vh;
  align-items: center;

  ${mq[1]} {
    grid-template-columns: 1fr 1fr;
  }

  ${mq[2]} {
    width: 85%;
  }
  ${mq[3]} {
    width: 70%;
  }
`

const ContactDetails = styled.div`
  display: grid;
  align-items: center;
  justify-items: left;
  grid-gap: 1rem;
  font-size: 1.2em;
  color: ${primary};
  a {
    span {
      text-transform: lowercase;
    }
  }
  h1 {
    font-size: 5em;
  }

  padding-top: 2rem;
  ${mq[1]} {
    padding-top: 0;
  }
`
