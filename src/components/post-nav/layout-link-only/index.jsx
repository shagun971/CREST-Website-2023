import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import { Link } from "gatsby";
import { NavItem, NavInner } from "./style";

const PostNav = ({ title, slug, rel, className }) => {
    return (
        <NavItem
            rel={rel}
            className={cn(className, "post-nav")}
        >
            <Link to={`/${slug}`}>
                <NavInner rel={rel}>
                    <h6>{title}</h6>
                    <i className="icon fa fa-angle-right"></i>
                </NavInner>
            </Link>
        </NavItem>
    );
};

PostNav.propTypes = {
    title: PropTypes.string,
    slug: PropTypes.string,
    rel: PropTypes.string,
    className: PropTypes.string,
};

export default PostNav;
