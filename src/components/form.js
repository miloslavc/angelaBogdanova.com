import React from "react"
import styled from "@emotion/styled"

//utils
import { primary, black, light, white } from "../utils"

//elements
import { PrimaryButton } from "../elements"

function Form() {
  return (
    <FormStyled
      name="contact"
      method="post"
      data-netlify="true"
      action="/success"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <StyledInput>
        <label>First Name :</label>
        <input type="text" name="firstName" required />
      </StyledInput>
      <StyledInput>
        <label>Last Name :</label>
        <input type="text" name="lastName" required />
      </StyledInput>
      <StyledInput>
        <label>Email :</label>
        <input type="email" name="email" required />
      </StyledInput>
      <StyledText>
        <label>Message :</label>
        <textarea data-gramm_editor="false" name="message" rows="4" required />
      </StyledText>
      <button value="submit" type="submit">
        <PrimaryButton>Submit</PrimaryButton>
      </button>
    </FormStyled>
  )
}

export default Form

const FormStyled = styled.form`
  display: grid;
  width: 100%;
  position: relative;
  justify-items: center;
  align-items: start;
  grid-gap: 1rem;
  background: ${light};
  padding: 2rem;
  border-radius: 5px;
  label {
    font-size: 1.1em;
    margin-bottom: 0.4em;
    display: block;
    color: ${black};
  }
  button {
    margin-top: 1rem;
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
    margin-right: auto;
    span {
      display: inline;
      margin-right: auto;
      &:before {
        background: ${white};
      }
    }
  }
`

const StyledInput = styled.div`
  margin-bottom: 1.3em;
  width: 100%;
  input {
    display: block;
    height: 45px;
    width: 100%;
    border: none;
    background: ${white};
    padding: 0 10px;
    letter-spacing: 0.1em;
    font-size: 1.1em;
    color: ${black};
    border: 2px solid transparent;
    &:valid {
      border: 2px solid ${primary};
    }
    &:focus {
      outline: none;
      border: 2px solid ${primary};
    }
  }
`

const StyledText = styled.div`
  width: 100%;
  textarea {
    width: 100%;
    border: none;
    outline: none;
    background: ${white};
    padding: 10px;
    resize: none;
    letter-spacing: 0.05em;
    font-size: 1.1em;
    color: ${black};
    border: 2px solid transparent;

    &:required {
      box-shadow: none;
    }
    &:valid {
      border: 2px solid ${primary};
    }
    &:focus {
      outline: none;
      border: 2px solid ${primary};
    }
  }
`
