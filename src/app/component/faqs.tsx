"use client";

import { useState } from "react";

const FAQComponent = () => {
  const [questions, setQuestions] = useState([
    {
      question: "What is the purpose of this FAQ?",
      answer: "This FAQ is designed to help users understand the most common questions and provide clarity on our application features.",
    },
  ]);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        question: "New question goes here?",
        answer: "This is the answer to the new question.",
      },
    ]);
  };

  return (
    <div className="w-[648px] bg-[#F7F7F7] p-4 rounded-lg">
      {questions.map((item, index) => (
        <div key={index} className="mb-4">
          {/* Question and Plus Icon */}
          <div className="flex justify-between items-center">
            <h3 className="font-inter text-[18px] font-bold leading-[26px] text-left">
              {item.question}
            </h3>

            <button
              onClick={addQuestion}
              className="text-gray-500 hover:text-black transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 5v14m7-7H5"
                />
              </svg>
            </button>
          </div>

          {/* Answer Text */}
          <p className="font-inter text-[16px] font-normal leading-[24px] text-left mt-2">
            {item.answer}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FAQComponent;