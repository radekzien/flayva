import { ingredient, ingredients, instruction, instructions, tag } from "@validation/recipe.validation";
import { z } from "zod";

export type RecipeTag = z.infer<typeof tag>;

export type RecipeIngredients = z.infer<typeof ingredients>

export type RecipeInstructions = z.infer<typeof instructions>