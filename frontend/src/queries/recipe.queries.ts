import { createQueryKeys } from "@lukemorales/query-key-factory";

import { api } from "@/api/api";

export const recipe = createQueryKeys("recipe", {
  querySuggestedSimilarTags: (tagQuery: string) => ({
    queryFn: () => api.recipe.querySuggestedSimilarTags(tagQuery),
    queryKey: ["recipe", "querySuggestedSimilarTags", tagQuery],
  }),
  queryRecipeIngredients: (ingredientQuery: string) => ({
    queryFn: () => api.recipe.queryRecipeIngredients(ingredientQuery), 
    queryKey: ["recipe", "queryRecipeIngredients", ingredientQuery],
  }),
  queryRecipeInstructions: (instructionsQuery: string) => ({
    queryFn: () => api.recipe.queryRecipeInstructions(instructionsQuery), 
    queryKey: ["recipe", "queryRecipeInstructions", instructionsQuery],
  }),
});
