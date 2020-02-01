import React from "react";
import RenderLinks from "./render-links";
import List from "@material-ui/core/List";
import Drawer from "./drawer";
import AppBar from "./app-bar";

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

export default Aside;
