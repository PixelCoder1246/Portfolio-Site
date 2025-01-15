import { useEffect, useState, useRef } from 'react';
import "./TypingEffect.css"

function TypingEffect({ fullText, typingSpeed }) {
  const [text, setText] = useState('');
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (indexRef.current < fullText.length) {
        indexRef.current++; // Increment the character index
        setText(fullText.slice(0, indexRef.current)); // Display up to the current index
      } else {
        clearInterval(interval); // Stop interval when done
      }
    }, typingSpeed);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [fullText, typingSpeed]);

  return (
    <>
      <div className='typing-effect' style={{color : "black"}}>{text}</div>
    </>
      

  );
}

export default (TypingEffect);
