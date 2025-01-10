const CasestudyPageTD = ({ duration, tools }) => {
  return (
    <section className="casestudy-page-td">
      <div className="casestudy-page-tools">
        <h1>Tools</h1>
        <div className="image-container">
          {tools.map((tool) => {
            return <img key={tool._id} src={`./../${tool.image}`} />;
          })}
        </div>
      </div>
      <div className="casestudy-page-duration">
        <h1>Duration</h1>
        <div className="date-container">
          <div className="date">
            <img src="./../green-dot.svg" />
            <h2>Start Date</h2>
            <p>
              {duration.start
                .toString()
                .split("T")[0]
                .replace(/-/g, "/")
                .trim()}
            </p>
          </div>
          <div className="date">
            <img src="./../green-dot.svg" />
            <h2>End Date</h2>
            <p>
              {duration.end.toString().split("T")[0].replace(/-/g, "/").trim()}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasestudyPageTD;
