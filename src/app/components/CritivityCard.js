const CritivityCard = ({ tag, title, text, img }) => {
  return (
    <div className="card">
      <div className="content">
        <p>{tag}</p>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <div>
        <img src={`./${img}`} />
      </div>
    </div>
  );
};

export default CritivityCard;
