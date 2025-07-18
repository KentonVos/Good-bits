import React, { useState } from 'react';

interface SearchBarProps {
  onGenerate: (prompt: string) => void;
  isLoading: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onGenerate, isLoading }) => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      onGenerate(prompt);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-10">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g., peanut butter, flour, milk..."
          className="w-full px-5 py-3 text-lg bg-gray-800 text-white border-2 border-gray-700 rounded-md focus:outline-none focus:border-orange-500 transition-colors"
          disabled={isLoading}
          aria-label="Enter your ingredients"
        />
        <button
          type="submit"
          disabled={isLoading || !prompt.trim()}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg py-3 px-8 rounded-md transition-colors duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed flex items-center justify-center min-w-[150px]"
        >
          {isLoading ? (
             <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
          ) : 'Generate'}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;