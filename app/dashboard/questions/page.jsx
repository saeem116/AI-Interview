"use client";

import Link from "next/link";
import React, { useState } from "react";

function Questions() {
  // Sample FAQ data
  const faqData = [
    {
      question: "What is this platform about?",
      answer:
        "Our platform provides AI-driven mock interview experiences to help you prepare for real job interviews.",
    },
    {
      question: "How can I upgrade my account?",
      answer:
        "You can upgrade by visiting the 'Upgrade' section in your dashboard and selecting a plan that suits you.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, we use industry-standard security measures to protect your data at all times.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time from your account settings without any hidden fees.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  // Toggle open/close state for each FAQ item
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 mt-3">
          Find answers to common questions below.
        </p>
      </header>

      {/* FAQ Section */}
      <div className="max-w-2xl w-full space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 cursor-pointer bg-white shadow-md"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">
                {faq.question}
              </h2>
              <span className="text-black">
                {openIndex === index ? "-" : "+"}
              </span>
            </div>
            {openIndex === index && (
              <p className="text-gray-600 mt-3">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="text-center mt-12">
        <p className="text-gray-600">
          Still have questions? Contact our support team for help.
        </p>
        <Link href={`https://www.linkedin.com/in/saeem-zaman/`} target="_blank">
          <button className="mt-4 px-6 py-2 bg-black text-white rounded-md hover:bg-slate-600 transition">
            Contact Support
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Questions;
