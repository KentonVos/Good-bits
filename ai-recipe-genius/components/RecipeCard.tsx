import React from 'react';
import type { Recipe } from '../types';

interface RecipeDetailProps {
  recipe: Recipe;
  recipeIndex: number;
  totalRecipes: number;
  onNext: () => void;
}

const ImagePlaceholder = () => (
    <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
        <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14"></path></svg>
    </div>
);

const RecipeCard: React.FC<RecipeDetailProps> = ({ recipe, recipeIndex, onNext }) => {
  return (
    <div className="max-w-6xl mx-auto border-4 border-white font-mono">
      <div className="grid grid-cols-1 md:grid-cols-12">
        
        {/* Left Orange Panel */}
        <div className="bg-orange-500 text-black p-8 md:p-10 flex flex-col col-span-1 md:col-span-5 lg:col-span-4">
            <div className="text-xl font-bold">#0{recipeIndex + 1}</div>
            <h2 className="text-5xl lg:text-6xl font-sans font-extrabold my-4 leading-none">{recipe.recipeName}</h2>
            <div className="flex-grow"></div>
            <button 
                onClick={onNext}
                className="w-16 h-16 bg-black text-white text-4xl font-bold hover:bg-gray-800 transition-colors flex items-center justify-center"
                aria-label="Next Recipe"
            >
                +
            </button>
        </div>

        {/* Right White Panel */}
        <div className="bg-white text-black p-8 md:p-10 col-span-1 md:col-span-7 lg:col-span-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-6">
                <p className="text-sm leading-relaxed">{recipe.description}</p>
                <div className="border-t border-b border-gray-200 py-2 space-y-2 text-sm">
                    <div className="flex justify-between"><span>Time</span> <span className="font-bold">{recipe.time}</span></div>
                    <div className="flex justify-between"><span>Servings</span> <span className="font-bold">{recipe.servings}</span></div>
                    <div className="flex justify-between"><span>Difficulty</span> <span className="font-bold">{recipe.difficulty}</span></div>
                </div>
            </div>
            <div className="min-h-[200px]">
                {recipe.imageUrl ? 
                    <img src={recipe.imageUrl} alt={recipe.recipeName} className="w-full h-full object-cover" />
                    : <ImagePlaceholder />
                }
            </div>
          </div>
          
          <div className="mt-10 pt-8 border-t border-gray-200">
             <h3 className="text-lg font-sans font-bold mb-4"><span className="text-orange-500">01</span> WHAT YOU NEED</h3>
             <ul className="space-y-2 text-sm">
                {recipe.ingredients.map((item, index) => (
                    <li key={index} className="flex items-center">
                        <span className="w-5 h-5 border-2 border-black mr-3 flex-shrink-0"></span>
                        <span>{item}</span>
                    </li>
                ))}
             </ul>
          </div>

           <div className="mt-10 pt-8 border-t border-gray-200">
             <h3 className="text-lg font-sans font-bold mb-4"><span className="text-orange-500">02</span> WHAT TO DO</h3>
             <ol className="space-y-4 text-sm">
                {recipe.instructions.map((step, index) => (
                    <li key={index} className="flex">
                        <span className="font-sans font-bold mr-3">STEP {index + 1}</span>
                        <p>{step}</p>
                    </li>
                ))}
             </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;