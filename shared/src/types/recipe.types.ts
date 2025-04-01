import { ingredient, ingredients, instruction, instructions, tag } from "@validation/recipe.validation";
import { z } from "zod";

export type RecipeTag = z.infer<typeof tag>;
export type ingredient = z.infer<typeof ingredient>;
export type ingredients = z.infer<typeof tag>;
export type instruction = z.infer<typeof tag>;
export type instructions = z.infer<typeof tag>;