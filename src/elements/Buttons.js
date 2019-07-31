import styled from "@emotion/styled"

import { primary, primaryBG } from "../utils"

export const PrimaryButton = styled.span`
  color: ${primary};
  font-size: 1.5em;
  position: relative;
  padding-left: 0.5em;
  justify-content: start;
  align-items: center;
  text-transform: capitalize;
  display: flex;
  z-index: 9;
  &::before {
    content: "";
    width: 120%;
    height: 15px;
    position: absolute;
    pointer-events: none;
    background: ${primaryBG};
    z-index: -1;
    transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
    left: -4px;
    bottom: 2px;
  }
  &:hover {
    cursor: pointer;
    &:before {
      width: 0;
    }
  }
`
