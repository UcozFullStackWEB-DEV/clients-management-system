import React from "react";
import "./Loader.css";

export default () => {
  return (
    <div className="probootstrap-main js-probootstrap-main loader-wrapper">
      <div className="lds-roller">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};
