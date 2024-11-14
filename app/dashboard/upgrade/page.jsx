import React from "react";

function Upgrade() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center p-8">
        {/* Header */}
        <header className="text-center mt-8 mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            Upgrade Your Plan
          </h1>
          <p className="text-gray-600 mt-3">
            Unlock exclusive features and level up your interview experience.
          </p>
        </header>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full mb-12">
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold text-black">Feature 1</h2>
            <p className="text-gray-500 mt-3">
              Access more interview questions.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold text-black">Feature 2</h2>
            <p className="text-gray-500 mt-3">Receive detailed feedback.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h2 className="text-xl font-semibold text-black">Feature 3</h2>
            <p className="text-gray-500 mt-3">Practice with unlimited mocks.</p>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="flex flex-col md:flex-row gap-8 max-w-4xl w-full mb-12">
          <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800">Basic Plan</h2>
            <p className="text-gray-600 mt-3">$5/month</p>
            <ul className="mt-6 space-y-3 text-gray-500">
              <li>5 mock interviews</li>
              <li>Email support</li>
              <li>Basic analytics</li>
            </ul>
            <button className="mt-6 w-full bg-black text-white py-2 rounded-md hover:bg-slate-600 transition">
              Choose Basic
            </button>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800">Pro Plan</h2>
            <p className="text-gray-600 mt-3">$15/month</p>
            <ul className="mt-6 space-y-3 text-gray-500">
              <li>Unlimited mock interviews</li>
              <li>Priority support</li>
              <li>Advanced analytics</li>
            </ul>
            <button className="mt-6 w-full bg-black text-white py-2 rounded-md hover:bg-slate-600 transition">
              Choose Pro
            </button>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Have questions? Reach out to our support team.
          </p>
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-600">Its just a Design, Not Functional.</p>
        </div>
      </div>
    </>
  );
}

export default Upgrade;
