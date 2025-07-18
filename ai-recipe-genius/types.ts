export interface Recipe {
  recipeName: string;
  description: string;
  time: string;
  servings: string;
  difficulty: string;
  ingredients: string[];
  instructions: string[];
  imageUrl?: string;
}