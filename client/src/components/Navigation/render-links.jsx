import React from "react";
import ListItemLink from "./link";
import PropTypes from "prop-types";

const RenderLinks = ({ links }) => {
  return (
    <>
      {links.map((link, i) => (
        <ListItemLink
          to={link.to}
          key={link.title}
          primary={link.title}
          click={link.click}
        />
      ))}
    </>
  );
};

RenderLinks.propTypes = {
  links: PropTypes.array
};

export default RenderLinks;
