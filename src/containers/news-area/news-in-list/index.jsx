import React, { Fragment } from "react";
import PropTypes from "prop-types";
import News from "@components/news/layout-list-item";
import SectionTitle from "@ui/section-title";
import { SectionTitleType, BlogType } from "@utils/types";
import { NewsBox } from "./styles";

const NewsArea = ({ data }) => {
    return (
        <Fragment>
            <div className="News Area">
                {data?.section_title && (
                    <SectionTitle
                        mb={["45px", null, "65px"]}
                        {...data.section_title}
                    />
                )}
                {data?.news?.map((aNews) => (
                    <NewsBox key={aNews.slug}>
                        <News
                            title={aNews.title}
                            slug={aNews.slug}
                            excerpt={aNews.description}
                            format={aNews.format}
                            postedAt={aNews.postedAt}
                            author={aNews.author}
                            categories={aNews.categories}
                            image={aNews.image}
                            quote_text={aNews.quote_text}
                            quote_author={aNews.quote_author}
                            video_link={aNews.video_link}
                            siteUrl={data.siteUrl}
                        />
                    </NewsBox>
                ))}
            </div>
        </Fragment>
    );
};

NewsArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        news: PropTypes.arrayOf(PropTypes.shape(BlogType)),
        siteUrl: PropTypes.string,
    }),
};

export default NewsArea;
