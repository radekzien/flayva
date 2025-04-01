import { useGetPostById } from "@/hooks/post.hooks";
import { queries } from "@/queries";
import { useQuery } from "@tanstack/react-query";

const ViewDetailedRecipePage = ({ id }: { id: string }) => {
  const { data: fetchedPost, isLoading, error } = useGetPostById(id);
  const { data: recipeIngredients, isLoading: ingredientsLoading, error: ingredientsError } = useQuery({
    queryKey: ["recipe", "queryRecipeIngredients", id],
    queryFn: () => queries.recipe.queryRecipeIngredients(id),
  });
  const { data: recipeInstructions, isLoading: instructionsLoading, error: instructionsError } = useQuery({
    queryKey: ["recipe", "queryRecipeInstructions", id],
    queryFn: () => queries.recipe.queryRecipeInstructions(id),
  });

  if (isLoading || ingredientsLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching post: {error.message}</div>;
  if (ingredientsError) return <div>Error fetching ingredients: {ingredientsError.message}</div>;
  if (instructionsError) return <div>Error fetching instructions: {instructionsError.message}</div>;

  return (
    <div>
      <h1>Recipe Details</h1>
    </div>
  );
};

export default ViewDetailedRecipePage;
