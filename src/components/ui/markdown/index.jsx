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

export const MarkdownComponents = {
  ul: StyledList,
  ol: StyledOrder,
};
