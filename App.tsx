import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RecipeCard from './components/RecipeCard';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorDisplay from './components/ErrorDisplay';
import WelcomeScreen from './components/WelcomeScreen';
import { generateRecipes, generateRecipeImage } from './services/geminiService';
import type { Recipe } from './types';

const App: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const loadAndSetImage = async (index: number, recipeName: string) => {
    // Check if image already exists or is being fetched
    if (recipes[index] && recipes[index].imageUrl) {
        return;
    }

    try {
        const imageUrl = await generateRecipeImage(recipeName);
        setRecipes(prevRecipes => {
            const newRecipes = [...prevRecipes];
            if (newRecipes[index]) {
              newRecipes[index].imageUrl = imageUrl;
            }
            return newRecipes;
        });
    } catch (err) {
        console.error(`Failed to load image for recipe ${index}:`, err);
        // Optionally set a placeholder error image
    }
  };

  useEffect(() => {
    if (recipes.length > 0 && !recipes[currentIndex].imageUrl) {
        loadAndSetImage(currentIndex, recipes[currentIndex].recipeName);
    }
  }, [recipes, currentIndex]);

  const handleGenerateRecipes = async (prompt: string) => {
    setIsLoading(true);
    setError(null);
    setRecipes([]);
    setCurrentIndex(0);

    try {
      const generatedRecipes = await generateRecipes(prompt);
      if (generatedRecipes.length === 0) {
        setError("Our chef couldn't find any recipes. Try different ingredients!");
      } else {
        setRecipes(generatedRecipes);
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleNextRecipe = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % recipes.length);
  };

  const renderContent = () => {
    if (isLoading) {
      return <LoadingSpinner />;
    }
    if (error) {
      return <ErrorDisplay message={error} />;
    }
    if (recipes.length > 0) {
      return (
        <RecipeCard 
          recipe={recipes[currentIndex]} 
          recipeIndex={currentIndex}
          totalRecipes={recipes.length}
          onNext={handleNextRecipe}
        />
      );
    }
    return <WelcomeScreen />;
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <SearchBar onGenerate={handleGenerateRecipes} isLoading={isLoading} />
        <div className="mt-6">
          {renderContent()}
        </div>
      </main>
       <footer className="text-center p-6 mt-8 text-gray-500 text-xs font-mono">
        <p>Powered by Google Gemini. Recipes are AI-generated and should be prepared with care.</p>
      </footer>
    </div>
  );
};

export default App;