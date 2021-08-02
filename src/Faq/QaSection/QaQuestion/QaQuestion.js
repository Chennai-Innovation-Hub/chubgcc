import React, {useRef, useState} from "react";
import './QaQuestion.css';

const QaQuestion = (props) => {
  const { faqData } = props;
  const [cardOpened, setCardOpened] = useState(false);
  const contentHeight = useRef(null);

  const toggleCard = () => {
    setCardOpened(!cardOpened);
  };

  return (
    <div className="expandable-tile">
      <button className={cardOpened ? "collapsible active tile-opened" : "collapsible"} onClick={toggleCard}>
        <div className='collapsible-dot'>•</div>
        <div className='collapsible-question'>{faqData.question}</div>
        <div className="collapsible-symbol collapsible-symbol-plus">+</div>
        <div className="collapsible-symbol collapsible-symbol-minus">-</div>
      </button>
      <div ref={contentHeight} style={cardOpened? {'maxHeight': contentHeight.current.scrollHeight} : {'maxHeight': 0} } className="content">
        <div style={{marginBottom: '24px'}}>
          { faqData.answer && <div className="collapsible-answer" style={{textAlign: "justify"}} >{faqData.answer}</div> }
          <ol className="collapsible-points">
            {
              faqData.answerPoints && faqData.answerPoints.map((faqPoint) => {
                return <li>{faqPoint}</li>;
              })
            }
          </ol>
          {faqData.readMore && <a href={faqData.readMore}>Read More...</a>}
        </div>
      </div>
    </div>
  );
};

export default QaQuestion;