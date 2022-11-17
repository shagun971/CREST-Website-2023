import styled, { themeGet, device } from "@styled";

export const SectionWrap = styled.section`
  padding-block-start: 30px;
  padding-block-end: 30px;
  border-block-end: 1px solid ${themeGet("colors.border")};
  ${device.medium} {
    padding-block-start: 50px;
    padding-block-end: 60px;
  }
  ${device.large} {
    padding-block-start: 70px;
    padding-block-end: 80px;
  }
`;

export const SlideWrapper = styled.div`
  position: relative;
  text-align: center;
`;

export const SlideContent = styled.div`
  position: absolute;
  text-align: center;
  left: 0;
  right: 0;
  top: 16px;
  background-image: linear-gradient(
    0deg,
    hsla(0, 0%, 25.29%, 0) 0%,
    hsla(0, 0%, 19.85%, 0.546875) 79.43%,
    hsla(0, 0%, 13.95%, 0.675) 90.28%,
    hsla(0, 0%, 7.32%, 0.765625) 97.43%,
    hsla(0, 0%, 0%, 0.8) 100%
  );
`;

export const SlideContentTitle = styled.h5`
  color: #efefee;
  background: #414141ee;
  padding-top: 8px;
  padding-bottom: 8px;
  font-weight: 800;
`;

export const SlideContentDescription = styled.div`
  position: absolute;
  text-align: justify;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 16px;
  color: #ffefee;
  background: #314141e0;
`;

export const SlideContentDescriptionText = styled.p`
  text-align: justify;
  .button {
    margin-left: 16px;
  }
`;
