import { useState, useEffect } from "react";

const CritivityCard = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function fetchItems() {
      try {
        setIsLoading(true);
        const response = await fetch("/api/creativity-motion");
        const data = await response.json();
        setItems(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching cards:", error);
        setIsLoading(false);
      }
    }
    fetchItems();
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      {items.map((item) => (
        <div className="card" key={item._id}>
          <div className="content">
            <p>{item.tag}</p>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
          <div>
            <img src={`./${item.image}`} alt={item.title} />
          </div>
        </div>
      ))}
    </>
  );
};

export default CritivityCard;
