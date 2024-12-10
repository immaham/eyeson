import React from "react";

const ViewMoreBtn = (props) => {
  return (
    <button className="btn-component">
      {props.text}
      <img src="./frame-803.svg" />
    </button>
  );
};

export default ViewMoreBtn;
