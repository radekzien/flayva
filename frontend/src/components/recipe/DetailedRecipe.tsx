//import { useGetPostById } from "@/hooks/post.hooks";
const ViewDetailedRecipePage = ({ id }: { id: string }) => {
  // Fetch the post details
  //const { data: fetchedPost, isLoading, error } = useGetPostById(id);
  //console.log(fetchedPost);
  //Hard-coded values just to develop UI. Just plug in all the values from the object into the consts
  const postDetails = {
    recipeDescription: "Pasta with Cheese",
    recipeTitle: "Cheesy Pasta",
    recipeIngredients: [{name:'Pasta',whole_amount: 250, numerator: 0, denominator: 0, units: 'g'},
      {name:'Cheese',whole_amount: 100, numerator: 0, denominator: 0, units: 'g'}
    ],
    recipeSteps: [{step: 1, instruction: "Boil pasta"}, {step: 2, instruction: "Drain pasta"}, {step: 3, instruction: "Add cheese"},
      {step: 4, instruction: "Mix in until melted and serve!"}]
  }

  return (
    <div className="DetailedRecipeComponent">
      <div className="Details">
        <h1>{postDetails.recipeTitle}</h1>
        <h2>{postDetails.recipeDescription}</h2>
      </div>
      <div className="Ingredients">
        <h1>Ingredients</h1>
        <h2>{postDetails.recipeIngredients.map((ingredient, index) => { return (
          <li key = {index}>
            {ingredient.name} {ingredient.whole_amount} {ingredient.units}
          </li>
        )})}</h2>
        </div>
        <div className="Instructions">
          <h1>Steps</h1>
          <h2>{postDetails.recipeSteps.map((step, index) => { return (
            <ul key = {index}>
              {step.step}. {step.instruction}
            </ul>
          )})}</h2>
      </div>
    </div>
  );
};

export default ViewDetailedRecipePage;
