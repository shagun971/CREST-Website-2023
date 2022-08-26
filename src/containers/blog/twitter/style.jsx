import styled, { themeGet, device } from "@styled";

export const BlogWrap = styled.section`
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
`;

export const BlogListItem = styled.div`
    padding: 20px 0;
`;

export const BlogList = styled.div`
    border-inline-start: 1px solid ${themeGet("colors.border")};
    padding-inline-start: 30px;
    margin-block-start: 40px;
    ${device.large} {
        margin-block-start: 0;
    }
    ${BlogListItem} {
        &:nth-child(2) {
            border-block-start: 1px solid ${themeGet("colors.border")};
            border-block-end: 1px solid ${themeGet("colors.border")};
        }
    }
`;


export const BlogWrapper = styled.div `
    background-color: #f6f2ed;
    background-size: auto !important;
    background-position: bottom right !important;
    padding-top: 100px;
    padding-bottom: 70px;
    @media ${device.medium}{
        padding-top: 80px;
        padding-bottom: 80px;
    }
    @media ${device.small}{
        padding-top: 60px;
        padding-bottom: 10px;
    }
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

export const RecentBlogWrap = styled.div `
    margin-top: 30px;
`;

export const FeaturedBlogWrap = styled.div `
    @media ${device.small}{
        margin-bottom: 50px;
    }
`;