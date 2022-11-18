import styled, { themeGet, device } from "@styled";

export const BoxWrap = styled.section`
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
    background: #F8FFFF;
`;

export const LeftBox = styled.div `
    margin-top: 30px;
    margin-bottom: 30px;
    @media ${device.medium}{
        margin-top: 0;
        margin-bottom: 40px;
    }
    @media ${device.small}{
        margin-bottom: 46px;
    }
`;

export const CenterBox = styled.div `
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-grow: 1;
    align-items: center;
    align-content: center;
    justify-content: center;

    h6 {
        margin-left: 16px;
    }
`;