import React from "react"
import styled from "@emotion/styled"

//utils
import { primary, primaryBG, black } from "../../utils"

function Footer() {
  return (
    <FooterStyled>
      <h1>angela bogdanova</h1>
      <a
        className="mail"
        href="mailto:contact@angelabogdanova.com"
        rel="noopener noreferrer"
      >
        ↪ contact@angelabogdanova.com
      </a>
      <p className="copy">
        &copy; {new Date().getFullYear()}. All rights received.
        <br /> design and developed by
        <a href="https://miloslavc.com" target="blank">
          Miloslav Cvetkovic
        </a>
      </p>
    </FooterStyled>
  )
}

export default Footer

const FooterStyled = styled.footer`
  display: flex;
  min-height: 45vh;
  padding: 2rem;
  margin-top: 2rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: ${primaryBG};
  color: ${primary};
  text-align: center;
  .mail {
    font-size: 1.8em;
    font-weight: bolder;
  }
  .copy {
    font-size: 0.7em;
    margin: 0;
    a {
      color: ${black};
      padding: 0.2rem;
    }
  }
`
