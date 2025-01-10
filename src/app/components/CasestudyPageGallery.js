import React from "react";
import ViewMoreBtn from "./ViewMoreBtn";

const CasestudyPageGallery = ({ gallery }) => {
  return (
    <section className="casestudy-page-gallery">
      <div className="casestudy-page-gallery-header">
        <h1>Gallery</h1>
        <ViewMoreBtn text="Show Content" />
      </div>
      <div className="casestudy-page-gallery-images-container">
        <div className="casestudy-page-gallery-images">
          {gallery.map((image) => (
            <div key={image._id} className="casestudy-page-gallery-image">
              <img src={`./../${image.image}`} />
            </div>
          ))}
        </div>
        <ViewMoreBtn text="View More" />
      </div>
    </section>
  );
};

export default CasestudyPageGallery;
