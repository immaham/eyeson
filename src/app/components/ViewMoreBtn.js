"use client";

import Link from "next/link";

const ViewMoreBtn = (props) => {
  return (
    <Link href={props.linkto || "#"}>
      <button className="btn-component">
        {props.text}
        <img src="./../frame-803.svg" />
      </button>
    </Link>
  );
};

export default ViewMoreBtn;
