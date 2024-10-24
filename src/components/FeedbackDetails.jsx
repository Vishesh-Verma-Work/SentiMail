import React from 'react';
import { useLocation } from 'react-router-dom';

const FeedbackDetails = () => {
  const location = useLocation();
  const { feedback } = location.state || {}; 
  if (!feedback) {
    return <p>No feedback data available.</p>;
  }

  return (
    <div className="feedback-detail">
      <h2>Feedback Details</h2>
      <p><strong>Name:</strong> {feedback.name}</p>
      <p><strong>Feedback:</strong> {feedback.feedback}</p>
      <p><strong>Time:</strong> {feedback.time}</p>
    </div>
  );
};

export default FeedbackDetails;
