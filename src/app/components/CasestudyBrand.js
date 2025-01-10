const CasestudyBrand = ({ brand, title }) => {
  return (
    <>
      <div className="casestudy-page-header-info">
        <div className="casestudy-page-header-info-image">
          <img src="./../casestudy-logo.png" />
        </div>
        <div className="casestudy-page-header-info-text">
          <p>{title}</p>
          <h2>{brand}</h2>
        </div>
      </div>
    </>
  );
};

export default CasestudyBrand;
