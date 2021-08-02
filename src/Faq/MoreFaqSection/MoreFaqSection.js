import React from "react";
import './MoreFaqSection.css';

const MoreFaqSection = () => {
  return (
    <div className="more-faq-section">
      <div className="more-faq-question">Still have a question ?</div>
      <hr />
        <div className="more-faq-content">If you have further questions that, Please feel free to mail us at</div>
        <a href="mailto:chub.gcc@gmail.com">chub.gcc@gmail.com</a>
    </div>
  );
};

export default MoreFaqSection;