import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import {
    StyledSectionTitle,
    StyledTitle,
    StyledSubtitle,
    StyledDesc,
} from "./style";

const CustomSectionTitle = ({
    title,
    subtitle,
    description,
    layout,
    className,
    descProps,
    ...props
}) => {
    if (layout === 1) {
        return (
            <StyledSectionTitle
                className={cn(className, "section-title")}
                $layout={layout}
                {...props}
            >
                {title && (
                    <StyledTitle
                        $layout={layout}
                        dangerouslySetInnerHTML={{ __html: title }}
                    />
                )}
                {subtitle && (
                    <StyledSubtitle $layout={layout}>{subtitle}</StyledSubtitle>
                )}
                {description && (
                    <StyledDesc {...descProps}>{description}</StyledDesc>
                )}
            </StyledSectionTitle>
        );
    }
    return (
        <StyledSectionTitle
            className={cn(className, "section-title")}
            $layout={layout}
            {...props}
        >
            {title && (
                <StyledTitle
                    $layout={layout}
                    dangerouslySetInnerHTML={{ __html: title }}
                />
            )}
            {subtitle && (
                <StyledSubtitle $layout={layout}>{subtitle}</StyledSubtitle>
            )}
            {description && (
                <StyledDesc {...descProps}>{description}</StyledDesc>
            )}
        </StyledSectionTitle>
    );
};

CustomSectionTitle.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    layout: PropTypes.number,
    className: PropTypes.string,
    descProps: PropTypes.shape({}),
};

CustomSectionTitle.defaultProps = {
    layout: 1,
    textAlign: "center",
};
export default CustomSectionTitle;
