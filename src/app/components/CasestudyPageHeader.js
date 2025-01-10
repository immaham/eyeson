import CasestudyBrand from "./CasestudyBrand";

const CasestudyPageHeader = ({ brand, title, description }) => {
  return (
    <div className="casestudy-page-header">
      <CasestudyBrand brand={brand} title={title} />
      <div className="casestudy-page-header-description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CasestudyPageHeader;
