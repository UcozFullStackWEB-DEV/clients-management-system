import React from "react";
import RenderLinks from "./render-links";
import List from "@material-ui/core/List";
import Drawer from "./drawer";
import AppBar from "./app-bar";
import PropTypes from "prop-types";

const Aside = ({ links, open, setOpen }) => {
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar open={open} handleDrawerOpen={handleDrawerOpen} />
      <Drawer
        open={open}
        setOpen={setOpen}
        handleDrawerClose={handleDrawerClose}
      >
        <List>
          <RenderLinks links={links} />
        </List>
      </Drawer>
    </>
  );
};

Aside.propTypes = {
  links: PropTypes.array,
  open: PropTypes.bool,
  setOpen: PropTypes.func
};

export default Aside;
