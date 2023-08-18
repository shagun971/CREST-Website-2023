import styled, { device } from "@styled";

export const SectionWrap = styled.div`
    padding-block: 80px;
    .popup-one, .Col {
        margin-bottom: 30px;
        padding-left: 20px;
        padding-right: 20px;
    }
    ${device.medium} {
        padding-block: 80px;
        .popup-one {
            margin-block-end: 0;
        }
    }
    ${device.large} {
        padding-block: 100px;
    }
`;




