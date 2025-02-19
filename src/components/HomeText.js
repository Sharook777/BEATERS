"use client";

// import { useState, useEffect } from "react";

export default function HomeText() {
  // const texts = ["NEW", "VALUE", "FUTURE"];
  // const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <>
      <span className="text-container">
        <span className="text">NEW</span>
        <span className="text">VALUE</span>
        <span className="text">FUTURE</span>
      </span>
      {/* <span
        style={{
          fontSize: "18px",
          fontWeight: 700,
          textAlign: "left",
        }}
      >
        {texts[currentIndex]}.
      </span> */}
      <style jsx>{`
        .text-container {
          position: relative;
          width: 300px;
          height: 50px;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding-left: 5px;
        }

        .text {
          position: absolute;
          opacity: 0;
          font-size: 25px;
          filter: blur(10px);
          font-weight: 700;
          animation: fadeText 9s infinite;
        }

        .text:nth-child(1) {
          animation-delay: 0s;
        }
        .text:nth-child(2) {
          animation-delay: 3s;
        }
        .text:nth-child(3) {
          animation-delay: 6s;
        }

        @keyframes fadeText {
          0% {
            opacity: 0;
            filter: blur(10px);
          }
          10% {
            opacity: 1;
            filter: blur(0);
          }
          30% {
            opacity: 1;
            filter: blur(0);
          }
          40% {
            opacity: 0;
            filter: blur(10px);
          }
          100% {
            opacity: 0;
            filter: blur(10px);
          }
        }
      `}</style>
    </>
  );
}
