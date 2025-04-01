import { request } from "@/lib/network";
import { RecipeTag,
  RecipeIngredients,
  RecipeInstructions
 } from "@flayva-monorepo/shared/types";

export const querySuggestedSimilarTags = async (tagQuery: string) => {
  const { data } = await request({ url: `/api/d/r/tags/q/${tagQuery}`, method: "GET" });

  return data.tags as RecipeTag[];
};

export const queryRecipeIngredients = async (Query: string) => {
  const { data } = await request({ url: `/api/d/r/recipe_ingredients/q/${Query}`, method: "GET" });

  return data as RecipeIngredients[];
};

export const queryRecipeInstructions = async (Query: string) => {
  const { data } = await request({ url: `/api/d/r/recipe_instructionss/q/${Query}`, method: "GET" });

  return data as RecipeInstructions[];
};
