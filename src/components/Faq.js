import React, {useState} from 'react';
import {GoQuote} from 'react-icons/go';

const Faq = () => {
    const [funFact, setFunFact] = useState([
        {
            question: 'How would I describe my friendships?',
            answer: 'I  would describe my friendships as being solar powered. The brighter and strong my friends shine the more energized I feel. Nothing makes me happier in life than seeing those who I love succeed and be happy'
        },
        {
            question: 'What is my favorite color?',
            answer: 'My favorite color is black, although technically not a color but the absorption of all the colors. Also love how when exposed to light it gets hot, metaphorically I can relate to rising up to the moment'
        },
        {
            question: 'What do I enjoy most about life',
            answer:'I enjoy being humbled and not in the sense from being arrogant or pompous but from going to places that leave me astonished or meeting people who have perfected/pushed their craft to new limits. No matter how many times I go to Yosemite National park I will always gaze in astonishment at what nature has created. Just as I will always be amazed by meeting humans who know no boundaries but that of their imagination and hard work.'
        }
    ])
    const [randomFact, setRandomFact] = useState(0);

    const factRandom = () => {
       let randomNum = Math.floor(Math.random() * 3);
       setRandomFact(randomNum)
    }

    return (
        <div className="faq-section">
            <h4 className="faq-title">
                <span className="faq-title-num">02.</span>
                F.A.Q
            </h4>
            <div className="fun-fact-container">
                {
                    <div className="fun-fact">
                        <h3>{funFact[`${randomFact}`].question}</h3>
                        <p>
                            <span className="quote-1">
                                <GoQuote/>
                            </span>
                                {funFact[`${randomFact}`].answer}
                            <span className="quote-2">
                                <GoQuote />
                            </span>
                        </p>
                    </div>
                }
            </div>
            <div className="fun-btn-container">
                <button className="fun-btn" onClick={() => factRandom()}>
                    F.A.Q 
                </button>
            </div>
        </div>
    )
}

export default Faq;
