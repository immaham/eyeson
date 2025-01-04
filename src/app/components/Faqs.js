"use client";
import { useState, useEffect } from "react";

const Faqs = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function fetchFaqs() {
      try {
        const response = await fetch("/api/faqs");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    }
    fetchFaqs();
  }, []);

  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleVisibility = (index) => {
    setOpenIndexes(
      (prevIndexes) =>
        prevIndexes.includes(index)
          ? prevIndexes.filter((i) => i !== index) // Remove index if already open
          : [...prevIndexes, index] // Add index if not open
    );
  };

  return (
    <section className="faqs">
      <img src="./faqs-light-left-1.svg" className="faqs-light-left-1 " />
      <img src="./faqs-light-right-1.svg" className="faqs-light-right-1" />
      <img src="./faqs-light-right-2.svg" className="faqs-light-right-2 " />
      <img
        src="./faqs-light-right-3.svg"
        className="faqs-light-right-3 light-off"
      />
      <img
        src="./faqs-light-right-4.svg"
        className="faqs-light-right-4 light-off"
      />
      <img
        src="./faqs-light-right-5.svg"
        className="faqs-light-right-5 light-off"
      />
      {/* <img src="./ellipse1234.svg" className="ellipse1234 light" /> */}
      {/* <img src="./e1.svg" className="e1 light" />
      <img src="./e2.svg" className="e2 light" />
      <img src="./e3.svg" className="e3 light" />
      <img src="./e4.svg" className="e4 light" /> */}
      <div className="faqs-left">
        <h1>FAQs</h1>
        <p>
          Detailed information about our motion graphics and animation services,
          including examples and benefits.
        </p>
        <a href="#">Support</a>
      </div>
      <div className="faqs-right">
        {items.map((item, index) => (
          <div
            className={`faqs-right-content ${
              !openIndexes.includes(index) && "close"
            }`}
            key={item._id}
          >
            <div
              onClick={() => toggleVisibility(index)}
              className="faqs-right-header"
            >
              <h1>{item.title}</h1>
              {openIndexes.includes(index) ? (
                <div className="svg-light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3 13.2949C3 18.8049 7.49 23.2949 13 23.2949C18.51 23.2949 23 18.8049 23 13.2949C23 7.78492 18.51 3.29492 13 3.29492C7.49 3.29492 3 7.78492 3 13.2949ZM8.92 14.0449C8.51 14.0449 8.17 13.7049 8.17 13.2949C8.17 12.8849 8.51 12.5449 8.92 12.5449H16.92C17.33 12.5449 17.67 12.8849 17.67 13.2949C17.67 13.7049 17.34 14.0449 16.92 14.0449H8.92Z"
                      fill="#002C3F"
                    />
                    <path
                      d="M2.5 13.2949C2.5 19.0811 7.21386 23.7949 13 23.7949V22.7949C7.76614 22.7949 3.5 18.5288 3.5 13.2949H2.5ZM13 23.7949C18.7861 23.7949 23.5 19.0811 23.5 13.2949H22.5C22.5 18.5288 18.2339 22.7949 13 22.7949V23.7949ZM23.5 13.2949C23.5 7.50878 18.7861 2.79492 13 2.79492V3.79492C18.2339 3.79492 22.5 8.06106 22.5 13.2949H23.5ZM13 2.79492C7.21386 2.79492 2.5 7.50878 2.5 13.2949H3.5C3.5 8.06106 7.76614 3.79492 13 3.79492V2.79492ZM8.92 13.5449C8.78614 13.5449 8.67 13.4288 8.67 13.2949H7.67C7.67 13.9811 8.23386 14.5449 8.92 14.5449V13.5449ZM8.67 13.2949C8.67 13.1611 8.78614 13.0449 8.92 13.0449V12.0449C8.23386 12.0449 7.67 12.6088 7.67 13.2949H8.67ZM8.92 13.0449H16.92V12.0449H8.92V13.0449ZM16.92 13.0449C17.0539 13.0449 17.17 13.1611 17.17 13.2949H18.17C18.17 12.6088 17.6061 12.0449 16.92 12.0449V13.0449ZM17.17 13.2949C17.17 13.4331 17.0595 13.5449 16.92 13.5449V14.5449C17.6205 14.5449 18.17 13.9767 18.17 13.2949H17.17ZM16.92 13.5449H8.92V14.5449H16.92V13.5449Z"
                      fill="#EEE8A9"
                    />
                    <path
                      opacity="0.01"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1 25.2949L1 1.29492L25 1.29492L25 25.2949L1 25.2949Z"
                      stroke="#EEE8A9"
                    />
                  </svg>
                </div>
              ) : (
                <div className="svg-light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    className="light"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3 13.2949C3 18.8049 7.49 23.2949 13 23.2949C18.51 23.2949 23 18.8049 23 13.2949C23 7.78492 18.51 3.29492 13 3.29492C7.49 3.29492 3 7.78492 3 13.2949ZM13.75 14.0449V17.2949C13.75 17.7049 13.41 18.0449 13 18.0449C12.59 18.0449 12.25 17.7049 12.25 17.2949V14.0449H9C8.59 14.0449 8.25 13.7049 8.25 13.2949C8.25 12.8849 8.59 12.5449 9 12.5449H12.25V9.29492C12.25 8.88492 12.59 8.54492 13 8.54492C13.41 8.54492 13.75 8.88492 13.75 9.29492V12.5449H17C17.41 12.5449 17.75 12.8849 17.75 13.2949C17.75 13.7049 17.41 14.0449 17 14.0449H13.75Z"
                      fill="#002C3F"
                    />
                    <path
                      d="M13.75 14.0449V13.5449H13.25V14.0449H13.75ZM12.25 14.0449H12.75V13.5449H12.25V14.0449ZM12.25 12.5449V13.0449H12.75V12.5449H12.25ZM13.75 12.5449H13.25V13.0449H13.75V12.5449ZM2.5 13.2949C2.5 19.0811 7.21386 23.7949 13 23.7949V22.7949C7.76614 22.7949 3.5 18.5288 3.5 13.2949H2.5ZM13 23.7949C18.7861 23.7949 23.5 19.0811 23.5 13.2949H22.5C22.5 18.5288 18.2339 22.7949 13 22.7949V23.7949ZM23.5 13.2949C23.5 7.50878 18.7861 2.79492 13 2.79492V3.79492C18.2339 3.79492 22.5 8.06106 22.5 13.2949H23.5ZM13 2.79492C7.21386 2.79492 2.5 7.50878 2.5 13.2949H3.5C3.5 8.06106 7.76614 3.79492 13 3.79492V2.79492ZM13.25 14.0449V17.2949H14.25V14.0449H13.25ZM13.25 17.2949C13.25 17.4288 13.1339 17.5449 13 17.5449V18.5449C13.6861 18.5449 14.25 17.9811 14.25 17.2949H13.25ZM13 17.5449C12.8661 17.5449 12.75 17.4288 12.75 17.2949H11.75C11.75 17.9811 12.3139 18.5449 13 18.5449V17.5449ZM12.75 17.2949V14.0449H11.75V17.2949H12.75ZM12.25 13.5449H9V14.5449H12.25V13.5449ZM9 13.5449C8.86614 13.5449 8.75 13.4288 8.75 13.2949H7.75C7.75 13.9811 8.31386 14.5449 9 14.5449V13.5449ZM8.75 13.2949C8.75 13.1611 8.86614 13.0449 9 13.0449V12.0449C8.31386 12.0449 7.75 12.6088 7.75 13.2949H8.75ZM9 13.0449H12.25V12.0449H9V13.0449ZM12.75 12.5449V9.29492H11.75V12.5449H12.75ZM12.75 9.29492C12.75 9.16106 12.8661 9.04492 13 9.04492V8.04492C12.3139 8.04492 11.75 8.60878 11.75 9.29492H12.75ZM13 9.04492C13.1339 9.04492 13.25 9.16106 13.25 9.29492H14.25C14.25 8.60878 13.6861 8.04492 13 8.04492V9.04492ZM13.25 9.29492V12.5449H14.25V9.29492H13.25ZM13.75 13.0449H17V12.0449H13.75V13.0449ZM17 13.0449C17.1339 13.0449 17.25 13.1611 17.25 13.2949H18.25C18.25 12.6088 17.6861 12.0449 17 12.0449V13.0449ZM17.25 13.2949C17.25 13.4288 17.1339 13.5449 17 13.5449V14.5449C17.6861 14.5449 18.25 13.9811 18.25 13.2949H17.25ZM17 13.5449H13.75V14.5449H17V13.5449Z"
                      //   fill="#EEE8A9"
                      className="fill-animation"
                    />
                    <path
                      opacity="0.01"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1 25.2949L1 1.29492L25 1.29492L25 25.2949L1 25.2949Z"
                      stroke="#EEE8A9"
                    />
                  </svg>
                </div>
              )}
            </div>
            <p
              className={`content ${
                openIndexes.includes(index) ? "open" : "closed"
              }`}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
