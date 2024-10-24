import React from "react";
import { Link } from "react-router-dom";
import img from "../utils/img/image.png";
const feedbackData = [
  {
    id: 1,
    name: "John Doe",
    feedback: "Great product! Really improved my workflow.",
    time: "2 hours ago",
  },
  {
    id: 2,
    name: "Jane Smith",
    feedback: "Good value for money, but needs some improvements.",
    time: "1 day ago",
  },
];

const Feedback = () => {
  return (
    <div className="feedback-container">
      <div className="product-details">
        <img src={img} alt="Product" className="product-image" />
        <h2 className="product-title">
          iPhone 16 Pro Max 256GB Black Titanium
        </h2>
        <p className="product-description">
          An unconnected iPhone purchased from apple.com is unlocked. This means
          you aren’t tied to a single network provider or a multi-year service
          contract. You can choose the network and tariff that are right for
          you. Once your new iPhone is activated, it remains unlocked, which
          means you can use it with any network that provides service for
          iPhone.
        </p>
      </div>

      <div className="feedback-section">
        <h3>Feedback</h3>
        <div className="feedback-list">
          {feedbackData.map((item) => (
            <Link to={`/feedback/details`} state={{ feedback: item }}>
              <div key={item.id} className="feedback-item">
                <p className="feedback-name">{item.name}</p>
                <p className="feedback-text">{item.feedback}</p>
                <p className="feedback-time">{item.time}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="complaint-section">
        <h3>Complaints</h3>
        <p className="complaint-text">No complaints yet.</p>
      </div>
    </div>
  );
};

export default Feedback;
