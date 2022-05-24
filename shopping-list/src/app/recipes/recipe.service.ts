import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();
  
  private recipes:  Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', '../../assets/images/samosa_recipe.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test', '../../assets/images/samosa_recipe.jpg')
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }
}
