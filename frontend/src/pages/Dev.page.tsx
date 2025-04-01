import { TagsInput } from "@/components/recipe/create/recipe-tags-input";
import { RecipeTag } from "@flayva-monorepo/shared/types";
import { useState } from "react";
import  ViewDetailedRecipePage from "@/components/recipe/DetailedRecipe.tsx"

export default function DevPage() {
  const [tags, setTags] = useState<RecipeTag[]>([]);

  return (
    <div>
      <h1>Dev Page</h1>
      <p>
        This is a page for development purposes. You can use it to test new features, components, or
        anything else.
      </p>
      <TagsInput tags={tags} onTagsChange={setTags} />
      <ViewDetailedRecipePage id = "1" />
    </div>
  );
}
