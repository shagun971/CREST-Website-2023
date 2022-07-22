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
