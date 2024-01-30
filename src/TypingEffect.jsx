import { useState, useEffect } from 'react';

function TypingEffect({ text, delay = 1000 }) {
  const [content, setContent] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index < text.length) {
        setContent((prevContent) => prevContent + text.charAt(index));
        setIndex((prevIndex) => prevIndex + 1);
      }
    }, index === 0 ? delay : 60); // Use delay for the first character, 100ms for the rest

    return () => clearTimeout(timer); // Clean up the timer
  }, [text, index, delay]);

  return <h1>{content}</h1>;
}

export default TypingEffect;
