import React from "react";
import PropTypes from "prop-types";
import PostNav from "@components/post-nav/layout-link-only";
import { ImageType } from "@utils/types";
import { Navigtion } from "./style";

const NavigationArea = ({ data }) => {
    console.log(data?.next);
    console.log(data?.previous);
    return (
        <Navigtion>
            {data?.previous && (
                <PostNav
                    rel="prev"
                    slug={'news/' + data?.previous.slug}
                    title={data?.previous.title}
                />
            )}
            {data?.next && (
                <PostNav
                    rel="next"
                    slug={'news/' + data?.next.slug}
                    title={data?.next.title}
                />
            )}
        </Navigtion>
    );
};

NavigationArea.propTypes = {
    data: PropTypes.shape({
        previous: PropTypes.shape({
            slug: PropTypes.string,
            title: PropTypes.string,
            image: PropTypes.shape(ImageType),
        }),
        next: PropTypes.shape({
            slug: PropTypes.string,
            title: PropTypes.string,
            image: PropTypes.shape(ImageType),
        }),
    }),
};

export default NavigationArea;
