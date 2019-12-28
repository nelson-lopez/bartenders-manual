import * as Yup from "yup";

export const CocktailSchema = Yup.object().shape({
  photo_url: Yup.string()
    .min(5, "Photo URL is too short!")
    .max(20, "Photo URL is too long"),
  name: Yup.string()
    .min(2, "Name is too short!")
    .max(20, "Name is too long!"),
  Ingredient: Yup.string()
    .min(5, "Ingredients is too short!")
    .max(40, "Ingredients list is too long!"),
  description: Yup.string()
    .min(10, "Description is too short!")
    .max(75, "Description is too long!"),
  directions: Yup.string()
    .min(10, "Directions are too short!")
    .max(75, "Directions are too long!"),
  type: Yup.string()
    .min(5, "Cocktail type is too short!")
    .max(20, "Cocktail Type is too long!")
});
