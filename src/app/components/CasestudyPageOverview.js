const CasestudyPageOverview = ({ contentCreation, projectInitiation }) => {
  return (
    <section className="casestudy-page-overview">
      <h1>Overview</h1>
      <div className="casestudy-page-overview-initiation">
        <h2>Project Initiation</h2>
        <ul>
          {projectInitiation.map((item) => (
            <li key={item._id}>
              <strong>{item.title}:</strong> {item.description}
            </li>
          ))}
        </ul>
      </div>
      <div className="casestudy-page-overview-creation">
        <h2>Content Creation</h2>
        <ul>
          {contentCreation.map((item) => (
            <li key={item._id}>
              <strong>{item.title}:</strong> {item.description}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CasestudyPageOverview;
