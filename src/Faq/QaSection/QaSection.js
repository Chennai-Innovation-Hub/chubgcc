import React from "react";
import QaQuestion from "./QaQuestion";
import './QaSection.css';
import L from '../../utils/localization';

const QaSection = () => {
  return (
    <div className="faqSection">
      <div className="faq-split" id="faqSplit1">
        {
          L.t('faq.faqSplit1QuestionsAndAnswers').map((faqData) => {
            return <QaQuestion faqData={faqData} />
          })
        }
      </div>
      <div className="faq-split" id="faqSplit2">
        {
          L.t('faq.faqSplit2QuestionsAndAnswers').map((faqData) => {
            return <QaQuestion faqData={faqData} />
          })
        }
      </div>
    </div>
  );
};

export default QaSection;