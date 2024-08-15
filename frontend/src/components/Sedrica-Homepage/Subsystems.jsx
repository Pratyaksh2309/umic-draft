import React, { useState } from 'react';
import './Subsystems.css';

function Subsystems(){
    const faqs = [
        { id: 1, question: 'Vision', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam sem, ultrices at vehicula ac, rhoncus et purus. Vivamus interdum tortor ut lectus tristique semper. Aliquam dolor metus, lobortis et arcu rhoncus, mollis hendrerit sapien.' },
        { id: 2, question: 'Mechatronics', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam sem, ultrices at vehicula ac, rhoncus et purus. Vivamus interdum tortor ut lectus tristique semper. Aliquam dolor metus, lobortis et arcu rhoncus, mollis hendrerit sapien.' },
        { id: 3, question: 'Materials', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam sem, ultrices at vehicula ac, rhoncus et purus. Vivamus interdum tortor ut lectus tristique semper. Aliquam dolor metus, lobortis et arcu rhoncus, mollis hendrerit sapien.' },
        { id: 4, question: 'Design', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam sem, ultrices at vehicula ac, rhoncus et purus. Vivamus interdum tortor ut lectus tristique semper. Aliquam dolor metus, lobortis et arcu rhoncus, mollis hendrerit sapien.' },

      ];
      const [expandedId, setExpandedId] = useState(null);

  const handleClick = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="faq-section">
      {faqs.map((faq) => (
        <div
          key={faq.id}
          className={`faq-card ${expandedId === faq.id ? 'expanded' : ''}`}
          onClick={() => handleClick(faq.id)}
        >
          <div className="faq-heading">
          {faq.question}
          <p style={{float: 'right'}}>{faq.id === expandedId ? '-' : '+'}</p>
          </div>
          {expandedId === faq.id && (
            <div className="faq-answer">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Subsystems