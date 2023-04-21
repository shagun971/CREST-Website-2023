import styled, { css, themeGet } from "@styled";

export const NavItem = styled.div`
  position: relative;
  min-height: 80px;
  width: 100%;
  height: 100%;
  isolation: isolate;
  z-index: 1;
  border-radius: ${themeGet("radii.lg")};
  border: "3px solid #14559b";
  a {
    display: block;
  }
  .gatsby-image-wrapper {
    min-height: 80px;
    border-radius: ${themeGet("radii.lg")};
  }
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: linear-gradient(0deg, #f3f3fd 0%, #086ad8 100%);
    border-radius: ${themeGet("radii.lg")};
    opacity: 0.5;
    z-index: 1;
    overflow: hidden;
  }
`;

export const NavInner = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${(props) =>
    props.rel === "next" &&
    css`
      padding-inline-end: 20px;
      h6 {
        padding-inline-end: 25px;
        padding-inline-start: 20px;
      }
    `}
  ${(props) =>
    props.rel === "prev" &&
    css`
      flex-direction: row-reverse;
      padding-inline-start: 20px;
      h6 {
        padding-inline-start: 25px;
        padding-inline-end: 20px;
      }
      .icon {
        transform: rotate(180deg);
      }
    `}
    h6 {
    position: relative;
    color: ${themeGet("colors.grayText")};
    font-size: 18px;
    font-weight: 500;
    line-height: 1.56;
    margin: 0;
    z-index: 1;
  }
  i {
    position: relative;
    font-size: 20px;
    font-weight: 400;
    color: ${themeGet("colors.grayText")};
    z-index: 1;
  }
`;
