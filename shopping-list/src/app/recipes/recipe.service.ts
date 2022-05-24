import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Samosa',
      'Cripsy hot pockets filled with tangy potato stuffing with Coriander chutney!',
      '../../assets/images/samosa_recipe.jpg',
      [
        new Ingredient("Potato", 5),
        new Ingredient("Green Peas", 50),
        new Ingredient("Green Chilli", 4),
        new Ingredient("Garlic", 3),
        new Ingredient("Coriander", 5)
      ]),
    new Recipe(
      'Pavbhaji',
      'Mix veg curry with bun and onions on side!',
      '../../assets/images/pavbhaji.jpg',
      [
        new Ingredient("Potato", 5),
        new Ingredient("Green Peas", 50),
        new Ingredient("Onion", 4),
        new Ingredient("Tomato", 3),
        new Ingredient("Coriander", 5)
      ])
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
