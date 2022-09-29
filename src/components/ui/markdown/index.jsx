import React from "react";
import styled, { css, themeGet, space } from "@styled";

const StyledList = styled.ul`
  position: relative;
  padding-inline-start: 24px;
  &:before,
  &:after {
    content: "●";
    position: absolute;
    top: 2px;
    left: 0;
    line-height: 1;
    font-family: "Font Awesome 5 Pro";
    font-weight: 900;
    transition: ${themeGet("transition")};
  }
  &:before {
    color: ${themeGet("colors.primary")};
    opacity: 0;
    visibility: hidden;
    transform: translateX(-100%);
  }
  &:after {
    color: ${themeGet("colors.text")};
  }
  &:hover {
    &:after {
      opacity: 0;
      visibility: hidden;
      transform: translateX(100%);
    }
    &:before {
      opacity: 1;
      visibility: visible;
      transform: translateX(0);
    }
  }
`;

const StyledOrder = styled.ol`
  position: relative;
  padding-inline-start: 24px;
  li::marker {
    font-weight: 900;
    color: ${themeGet("colors.text")};
  }
  li {
    padding-inline-start: 8px;
  }
`;

const StyledH1 = styled.h1`
  text-align: center;

  text-transform: uppercase;
  font-size: 26px;
  letter-spacing: 1px;

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 16px 0;
  grid-gap: 22px;

  &:after {
    content: " ";
    display: block;
    border-bottom: 2px solid #CFCFCF;
  }
  &:before {
    content: " ";
    display: block;
    border-bottom: 2px solid #CFCFCF;
  }
`;


export const MarkdownComponents = {
  ul: StyledList,
  ol: StyledOrder,
  h1: StyledH1,
};
