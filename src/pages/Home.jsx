import TypingEffect from "../TypingEffect";
import { useState, useEffect } from 'react';

const Home = () => {
    const [isTypingDone, setIsTypingDone] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTypingDone(true);
        }, 1000 + 100 * "Hi, I'm Chase and I'm a Web Developer.".length);

        return () => clearTimeout(timer); // Clean up the timer
    }, []);

    return (
        <>
            <div className="outlet">
                <div className="home">
                    <div className="aboutheader">
                        <TypingEffect text="My name is Chase and I'm a web developer." delay={2300} />
                        <p className={`fade-in ${isTypingDone ? 'visible' : ''}`}>
                            I have been developing since January 2023, and I'm looking to take a step into a career of Web Development.
                        </p>
                    </div>
                    <div className="photo-div">
                        <img src="/self-photo.png" alt="Chase" className="self-photo" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
