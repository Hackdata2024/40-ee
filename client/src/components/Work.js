import React from "react";
import emergencycall from "../Assets/emergencycall.png";
import Medication from "../Assets/Medication.jpg";
import PositiveNews from "../Assets/PositiveNews.jpg";

const Work = () => {
  const workInfoData = [
    {
      image: emergencycall,
      title: "Emergency Call",
      text: "Calling your loved ones in case of emergency is just a click away.",
    },
    {
      image: Medication,
      title: "Medication Alert",
      text: "There wont be any miss of medication with our alert system.",
    },
    {
      image: PositiveNews,
      title: "Positive News",
      text: "Surround yourself with positive news and stay happy.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Experience peace of mind with our comprehensive system: swiftly reach
          loved ones during emergencies with our intuitive emergency call
          feature, maintain optimal health with our reliable medication alerts
          ensuring no dose is missed, and enrich your life with a constant
          stream of uplifting news, fostering positivity and resilience in every
          moment.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
