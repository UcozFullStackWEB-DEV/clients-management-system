import React from "react";
import ListItemLink from "./link";

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

export default RenderLinks;
