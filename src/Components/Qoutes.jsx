import { useState } from "react";

const Qoutes = () => {
  const [randomQoute, setRandomQoute] = useState("");

  const quoteData = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "You must be the change you want to see in the world. - Mahatma Gandhi",
    "The best way to find yourself is to lose yourself in the service of others. - Mahatma Gandhi",
    "In a gentle way, you can shake the world. - Mahatma Gandhi",
    "Satisfaction lies in the effort, not in the attainment; full effort is full victory. - Mahatma Gandhi",
    "Code is like humor. When you have to explain it, it’s bad -Cory House",
    "Programming isn't about what you know; it's about what you can figure out -Chris Pine",
    "Code never lies, comments sometimes do- Ron Jeffries"
  ];

  const generateRandomeQoute = () => {
    const randomIndex = Math.floor(Math.random() * quoteData.length);

    const randomQoute = quoteData[randomIndex];
    setRandomQoute(randomQoute);
  };

  return (
    <>
      <div className="main-div">
        <div>Live Your Life Every Day - Vikash Yadav {randomQoute}</div>
        <button onClick={generateRandomeQoute}> Generate Qoutes</button>
      </div>
    </>
  );
};

export default Qoutes;
