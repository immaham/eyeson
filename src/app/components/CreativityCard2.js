const cardsData2 = [
  {
    id: 1,
    title: "Project Name",
    text: "A little more Detail about it",
    img: "creativity21.png",
  },
  {
    id: 2,
    title: "Project Name",
    text: "A little more Detail about it",
    img: "creativity22.png",
  },
  {
    id: 3,
    title: "Project Name",
    text: "A little more Detail about it",
    img: "creativity23.png",
  },
  {
    id: 4,
    title: "Project Name",
    text: "A little more Detail about it",
    img: "creativity24.png",
  },
  {
    id: 5,
    title: "Project Name",
    text: "A little more Detail about it",
    img: "creativity25.png",
  },
  {
    id: 6,
    title: "Project Name",
    text: "A little more Detail about it",
    img: "creativity26.png",
  },
  {
    id: 7,
    title: "Project Name",
    text: "A little more Detail about it",
    img: "creativity27.png",
  },
  {
    id: 8,
    title: "Project Name",
    text: "A little more Detail about it",
    img: "creativity28.png",
  },
  {
    id: 9,
    title: "Project Name",
    text: "A little more Detail about it",
    img: "creativity29.png",
  },
];

const CreativityCard2 = () => {
  return (
    <div className="cards2">
      {cardsData2.map((data) => {
        return (
          <div className="card2" key={data.id}>
            <img src={`./${data.img}`} />
            <div className="overlay">
              <h2>{data.title}</h2>
              <p>{data.text}</p>
            </div>
          </div>
        );
      })}
      {/* <div className="card2">
        <img src="./creativity21.png" />
        <div className="overlay">
          <h2>Project Name</h2>
          <p>A little more Detail about it</p>
        </div>
      </div>
      <div className="card2">
        <img src="./creativity21.png" />
        <div className="overlay">
          <h2>Project Name</h2>
          <p>A little more Detail about it</p>
        </div>
      </div>
      <div className="card2">
        <img src="./creativity21.png" />
        <div className="overlay">
          <h2>Project Name</h2>
          <p>A little more Detail about it</p>
        </div>
      </div>
      <div className="card2">
        <img src="./creativity21.png" />
        <div className="overlay">
          <h2>Project Name</h2>
          <p>A little more Detail about it</p>
        </div>
      </div>
      <div className="card2">
        <img src="./creativity21.png" />
        <div className="overlay">
          <h2>Project Name</h2>
          <p>A little more Detail about it</p>
        </div>
      </div>
      <div className="card2">
        <img src="./creativity21.png" />
        <div className="overlay">
          <h2>Project Name</h2>
          <p>A little more Detail about it</p>
        </div>
      </div>
      <div className="card2">
        <img src="./creativity21.png" />
        <div className="overlay">
          <h2>Project Name</h2>
          <p>A little more Detail about it</p>
        </div>
      </div>
      <div className="card2">
        <img src="./creativity21.png" />
        <div className="overlay">
          <h2>Project Name</h2>
          <p>A little more Detail about it</p>
        </div>
      </div>
      <div className="card2">
        <img src="./creativity21.png" />
        <div className="overlay">
          <h2>Project Name</h2>
          <p>A little more Detail about it</p>
        </div>
      </div> */}
    </div>
  );
};

export default CreativityCard2;
