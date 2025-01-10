import React from "react";

const CasestudyPageMainImage = ({ mainImage }) => {
  return (
    <div className="casestudy-page-main-image">
      <img src={`./../${mainImage}`} />
    </div>
  );
};

export default CasestudyPageMainImage;
