import React from 'react';
import './Instructions.css'; // Make sure this file matches the improved style

const Instructions = () => {
  return (
    <div className="instruction-container">
      <h1 className="page-title">Student Instructions & Guidelines</h1>

      {/* Exam Fee Section */}
      <div className="section-box">
        <h2>📘 Exam Fee Details</h2>
        <p>Please ensure to pay your examination fees before the deadline to avoid penalties.</p>
        <ul className="quick-links">
          <li><a href="/exam-fee-payment">Pay Exam Fees Online</a></li>
          <li><a href="/download-fee-receipt">Download Fee Receipt</a></li>
          <li><a href="/check-payment-status">Check Payment Status</a></li>
        </ul>
      </div>

      {/* Violation Rules Section */}
      <div className="section-box">
        <h2>⚠️ Exam Violation Rules</h2>
        <ul>
          <li>Any use of unauthorized materials will result in immediate expulsion from the exam hall.</li>
          <li>Mobile phones and smart watches are strictly prohibited.</li>
          <li>Plagiarism or copying from others will be considered malpractice.</li>
          <li>Late entry beyond 30 minutes will not be allowed under any circumstance.</li>
        </ul>
      </div>

      {/* Campus Rules Section */}
      <div className="section-box">
        <h2>🏫 Campus Rules</h2>
        <ul>
          <li>Students must maintain proper dress code. Formal attire is expected on all weekdays.</li>
          <li>Boys should be clean-shaven and neatly groomed.</li>
          <li>Strictly no ragging. Our campus follows zero tolerance policy on ragging.</li>
          <li>All students should wear their ID cards while on campus.</li>
          <li>Silence must be maintained inside academic blocks and library premises.</li>
        </ul>
      </div>
    </div>
  );
};

export default Instructions;
