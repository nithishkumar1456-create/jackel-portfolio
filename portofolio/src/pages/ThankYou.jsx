import React from 'react';
import ShinyText from '../components/ShinyText/ShinyText';

const ThankYou = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#020617] text-white p-6">
      <div className="bg-[#0F172A] p-10 rounded-2xl border border-blue-500/30 text-center shadow-2xl">
        <h1 className="text-5xl font-extrabold mb-4">
          <ShinyText text="Thank You!" disabled={false} speed={3} />
        </h1>
        <p className="text-lg text-slate-400 mb-8">
          Your message has been sent successfully. I&apos;ll get back to you as soon as possible!
        </p>
        <a 
          href="/" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg shadow-blue-500/20"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default ThankYou;
