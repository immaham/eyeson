const CasestudyPageResults = ({ results }) => {
  return (
    <section className="casestudy-page-results">
      <img src="../casestudy-light1.svg" className="casestudy-light4" />
      <h1>Results</h1>
      <div className="casestudy-page-results-initiation">
        {results.map((item) => (
          <div key={item._id}>
            <p>{item.title}</p>
            <ul>
              {item.description.map((desc, descIndex) => (
                <li key={descIndex}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CasestudyPageResults;
