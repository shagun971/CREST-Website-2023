import styled, { css, device, themeGet } from "@styled";

export const TimelineWrap = styled.div``;

export const TimelineList = styled.div`
  position: relative;
  width: 100%;
  padding: 32px 0 65px;
`;

export const Line = styled.div`
  position: absolute;
  top: 0;
  left: 15px;
  margin-inline-start: -1px;
  height: 100%;
  border-left: 2px solid ${themeGet("colors.primary")};
  opacity: 0.15;
  ${device.medium} {
    left: 22%;
  }
`;

export const Dots = styled.div`
  position: absolute;
  top: 14px;
  width: 30px;
  height: 30px;
  color: ${themeGet("colors.primary")};
  left: 0;

  ${device.medium} {
    left: 22%;
    transform: translate(-50%, 0);
  }
  &:before {
    content: "";
    position: absolute;
    border: 2px solid currentColor;
    border-radius: ${themeGet("radii.round")};
    background: ${themeGet("colors.pattens")};
    top: 0;
    left: 0;
    opacity: 0.9;
    width: 30px;
    height: 30px;
  }
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 14px;
    height: 14px;
    border-radius: ${themeGet("radii.round")};
    z-index: 2;
    border: 3px solid currentColor;
    background: #fff;
  }
`;

export const TimelineRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TimelineFeature = styled.div`
  padding-inline-start: 15px;
  padding-inline-end: 15px;
  flex: 0 0 20%;
  max-width: 20%;

  ${device.medium} {
    padding-inline-start: 30px;
    padding-inline-end: 30px;
    flex: 0 0 20%;
    max-width: 20%;
  }
`;

export const TimelineFeatureInner = styled.div`
  max-width: 100%;
`;

export const DateWrap = styled.h2`
  color: ${themeGet("colors.primary")};
  font-size: clamp(32px, 5vw, 72px);
  font-weight: 400;
  line-height: 1;
  margin-block-end: 27px;
`;

export const Photo = styled.figure`
  img {
    border-radius: ${themeGet("radii.md")};
  }
`;

export const TimelineInfo = styled.div`
  padding-inline-start: 15px;
  padding-inline-end: 15px;
  flex: 0 0 80%;
  max-width: 100%;
  ${device.medium} {
    padding-inline-start: 30px;
    padding-inline-end: 30px;
  }
`;

export const TimelineInfoInner = styled.div`
  width: 100%;
  max-width: 100%;
  padding-block-start: 15px;
  ${device.medium} {
    padding-block-start: 25px;
  }
  ${device.large} {
    padding-block-start: 45px;
  }
  ${device.xlarge} {
    padding-block-start: 60px;
  }
`;

export const TimelineContent = styled.div`
  display: inline-block;
  max-width: 100%;
  padding-inline-start: 15px;
  padding-inline-end: 15px;
`;

export const Title = styled.h6`
  margin-block-end: 15px;
  font-size: 22px;
  ${device.large} {
    font-size: 24px;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.8;
  ${device.small} {
    font-size: 18px;
    line-height: 2;
  }
`;

export const Item = styled.div`
  position: relative;
  &:not(:first-child) {
    padding-inline-start: 25px;
    margin-block-start: 25px;
    width: 100%;
    ${device.small} {
      padding-inline-start: 45px;
      width: auto;
    }
    ${device.medium} {
      padding-inline-start: 0;
      margin-block-start: 25px;
    }
  }
  &:nth-child(2) {
    margin-block-start: 0;
  }

  ${(props) =>
    props.align === "left" &&
    css`
      ${TimelineInfoInner} {
        float: right;
        text-align: left;
      }
      ${TimelineFeatureInner} {
        text-align: start;
        float: left;
        ${device.medium} {
          text-align: end;
        }
      }
    `}
  ${(props) =>
    props.align === "right" &&
    css`
      ${TimelineRow} {
        flex-direction: row-reverse;
      }
      ${TimelineInfoInner} {
        float: left;
        text-align: start;
        ${device.medium} {
          text-align: end;
        }
      }
      ${TimelineFeatureInner} {
        text-align: start;
        float: right;
      }
    `}
`;
