import React from 'react';

const Body = () => {
  return (
    <div className="body-container">
      
      <section className="intro-section">
        <h1>Welcome to Sentimail</h1>
        <p>Your trusted platform for gathering and analyzing customer feedback.</p>
      </section>

      
      <section className="overview-section">
        <h2>About Sentimail</h2>
        <p>
          Sentimail helps businesses collect, manage, and analyze feedback in real time, providing clear insights into customer sentiment. Our solution is designed for companies seeking to improve their customer experience and streamline complaint resolution.
        </p>
      </section>

      <section className="features-section">
        <h2>Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Real-time Sentiment Analysis</h3>
            <p>Analyze feedback sentiment to get a pulse on customer satisfaction instantly.</p>
          </div>
          <div className="feature-card">
            <h3>Effortless Feedback Management</h3>
            <p>Organize and prioritize feedback for faster resolution and data-driven improvements.</p>
          </div>
          <div className="feature-card">
            <h3>Comprehensive Reporting</h3>
            <p>Receive comprehensive, easy-to-understand reports for effective decision-making.</p>
          </div>
        </div>
      </section>

      
      <section className="how-it-works-section">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <h3>Step 1: Post a Product</h3>
            <p>Hosts can create a product listing and invite feedback from customers.</p>
          </div>
          <div className="step">
            <h3>Step 2: Gather Feedback</h3>
            <p>Customers provide feedback and suggestions to help refine your offerings.</p>
          </div>
          <div className="step">
            <h3>Step 3: Generate Insights</h3>
            <p>Get visualized sentiment data and summaries to better understand feedback.</p>
          </div>
        </div>
      </section>

      
      <section className="target-audience-section">
        <h2>Who Uses Sentimail?</h2>
        <p>From businesses seeking customer insights to individuals managing personal projects, Sentimail serves anyone needing organized, actionable feedback.</p>
      </section>

      
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>Have questions? Reach out to learn more about how Sentimail can help.</p>
        <button className="contact-button">Get in Touch</button>
      </section>
    </div>
  );
};

export default Body;
