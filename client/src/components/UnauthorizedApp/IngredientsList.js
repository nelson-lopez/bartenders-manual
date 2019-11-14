import React from "react";
import StyledIngredients from "../component-styles/StyledIngredients";

const IngredientsList = () => {
  return (
    <StyledIngredients>
      <h2>Ingredients</h2>
      <h2>Orgeat</h2>
      <img src="https://imgur.com/GqpGSyq.png" alt="woops" />
      <p>
        2 cups Blanched almonds (If prefer to use bitter almonds, find them
        online or at a Mediterranean grocery store) 1.5 cups Sugar 1.25 cups
        Water .5 teaspoon Orange flower water 1 oz Brandy
      </p>
      <h2>Cinnamon Syrup</h2>
      <img
        src="http://bakingbites.com/wp-content/uploads/2016/10/DSC_2263.jpg"
        alt="woops"
      />
      <p>
        1 cup granulated sugar 1 cup water 4 cinnamon sticks, broken into large
        pieces Bring all ingredients to a boil over medium heat. Reduce heat to
        medium-low and let simmer for 8-10 minutes until sugar has dissolved,
        stirring frequently. Remove from heat and let cool. Discard cinnamon
        sticks, strain into a clean glass jar and cover. Store refrigerated for
        up to 2 weeks.
      </p>
    </StyledIngredients>
  );
};

export default IngredientsList;
