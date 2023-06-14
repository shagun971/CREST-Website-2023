import styled, { device, themeGet } from "@styled";

export const SectionWrap = styled.div`
    background-color: ${themeGet("colors.spring")};
    padding-block-start: 60px;
    padding-block-end: 60px;
    ${device.medium} {
        padding-block-start: 80px;
        padding-block-end: 80px;
    }
    ${device.large} {
        padding-block-start: 100px;
        padding-block-end: 100px;
    }
    .box-item {
        margin-block-start: 30px;
    }

    div.vAlign {
        justify-content: center;
    }
`;
