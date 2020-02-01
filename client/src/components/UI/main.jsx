import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  content: {
    marginTop: 65,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: 75
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: drawerWidth + 20
  }
}));

const MainWrapper = ({ children, open }) => {
  const classes = useStyles();
  return (
    <main
      className={clsx(classes.content, {
        [classes.contentShift]: open
      })}
    >
      {children}
    </main>
  );
};

export default MainWrapper;
