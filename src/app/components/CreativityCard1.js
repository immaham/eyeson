import { useState, useEffect, useRef } from "react";
import videojs from "video.js";

const CritivityCard = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videoPlayerRef = useRef(null);

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

  useEffect(() => {
    // Initialize video.js player when the video is selected
    if (selectedVideo) {
      const player = videojs(videoPlayerRef.current, {
        controls: true,
        autoplay: true,
        preload: "auto",
      });

      return () => {
        player.dispose(); // Cleanup the player on unmount or video change
      };
    }
  }, [selectedVideo]);

  const handleVideoPlay = (videoUrl) => {
    setSelectedVideo(videoUrl); // Set the video URL to display the overlay
  };

  const handleCloseOverlay = () => {
    setSelectedVideo(null); // Close the video overlay
  };

  if (isLoading) {
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      {selectedVideo && (
        <div className="video-overlay">
          <button onClick={handleCloseOverlay} className="close-button">
            Close
          </button>
          <video
            ref={videoPlayerRef}
            className="video-js vjs-default-skin video-player"
          >
            <source src={selectedVideo} />
          </video>
        </div>
      )}
      {items.map((item) => (
        <div className="card" key={item._id}>
          <div className="content">
            <p>{item.tag}</p>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
          <div className="cover-button">
            <img src={`./${item.image}`} alt={item.title} />
            {/* Play Video Button */}
            <button
              onClick={() => handleVideoPlay(item.videoUrl)}
              className="play-button"
            >
              <img src="./play-circle.svg" className="play-button-icon" />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default CritivityCard;
