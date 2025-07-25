import React, { useState, useEffect } from 'react';

const faqData = [
  {
    question: 'What is the Frosh Society at TIET?',
    answer: 'Frosh is a student-run society that organizes thrilling events and helps freshers feel at home.',
  },
  {
    question: 'What events and activities does Frosh organize?',
    answer: 'Frosh organizes concerts, games, mystery hunts, talent shows, and much more!',
  },
  {
    question: 'How can I join the Frosh Society?',
    answer: 'Keep an eye out for the recruitment drive in the first semester!',
  },
  {
    question: 'Why should I participate in Frosh events?',
    answer: 'Because they are fun, creative, and a great way to meet new people!',
  },
];

const keyframes = `
@keyframes scroll-left {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-100%); }
}
`;

const FlowingFAQ = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Ensure body & html are reset
  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
    document.body.style.backgroundColor = 'black'; // Optional to set full bg
  }, []);

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}>
      <style>{keyframes}</style>

      <h1 style={{
        fontSize: '48px',
        color: 'white',
        margin: '40px 0',
        textAlign: 'center'
      }}>
        FAQ
      </h1>

      {faqData.map((faq, index) => {
        const isHovered = hoveredIndex === index;

        return (
          <div
            key={index}
            style={{
              position: 'relative',
              height: '60px',
              overflow: 'hidden',
              backgroundColor: '#0d0d0d',
              cursor: 'pointer',
              borderTop: '1px solid #222',
              borderBottom: '1px solid #222',
              width: '100vw',  // Full viewport width
                marginBottom: '10px'
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Scrolling Answer Bar */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '60px',
                overflow: 'hidden',
                zIndex: 1,
                opacity: isHovered ? 1 : 0,
                transition: 'opacity 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'white',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  whiteSpace: 'nowrap',
                  paddingLeft: '100%',
                  animation: 'scroll-left 15s linear infinite',
                  fontSize: '18px',
                  color: 'black',
                }}
              >
                {faq.answer}
              </span>
            </div>

            {/* Question Text */}
            <div
              style={{
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '18px',
                fontWeight: 500,
                zIndex: 2,
                position: 'relative',
                transition: 'opacity 0.3s ease',
                color: 'white',
                opacity: isHovered ? 0 : 1,
              }}
            >
              {faq.question}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FlowingFAQ;
