import React from 'react';

const WelcomeScreen: React.FC = () => {
  return (
    <div className="text-center p-8 bg-gray-800 rounded-lg shadow-lg max-w-3xl mx-auto border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-4">Welcome to Your AI Kitchen Assistant</h2>
        <p className="text-gray-400 mb-6">
            Don't let your ingredients go to waste. Tell me what you have, and I'll create delicious recipes just for you.
        </p>
        <div className="bg-gray-900 p-4 rounded-lg">
            <h3 className="font-semibold text-lg text-orange-500 mb-3">Try prompts like:</h3>
            <ul className="text-gray-400 space-y-1 font-mono text-sm">
                <li>"a can of tuna, bread, and mayonnaise"</li>
                <li>"ground beef and a potato"</li>
                <li>"eggs, a little bit of cheese, and some milk"</li>
            </ul>
        </div>
    </div>
  );
};

export default WelcomeScreen;