import React from "react";
import CasestudyBrand from "./CasestudyBrand";

const CasestudyPageNext = ({ brand, title }) => {
  return (
    <div className="casestudy-page-next">
      <h1>Next Project</h1>
      <CasestudyBrand brand={brand} title={title} />
    </div>
  );
};

export default CasestudyPageNext;
