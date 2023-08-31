import styled, { css, space, flexbox } from "@styled";

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
    align-items: center;

    .static-img {
      margin-right: 10px;
      max-width: 100%; /* Limit the maximum width of the image */
    }
  }

  ${({ $variant }) =>
    $variant === "white" &&
    css`
      .dark-logo {
        display: none !important;
      }
      .light-logo {
        display: inherit;
      }
    `}
  ${({ $variant }) =>
    $variant === "dark" &&
    css`
      .dark-logo {
        display: inherit;
      }
      .light-logo {
        display: none !important;
      }
    `}
`;
