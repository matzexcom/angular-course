import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private _recipes: Recipe[] = [
    new Recipe(
      'Noodles',
      'With red sauce',
      'https://www.giallozafferano.com/images/228-22832/spaghetti-with-tomato-sauce_1200x800.jpg',
      'Spaghetti with tomato sauce',
      [
        new Ingredient('Spaghetti', 1),
        new Ingredient('Cooking Cusine', 1),
        new Ingredient('Tomato sauce', 1),
        new Ingredient('Onion', 1),
        new Ingredient('Garlic', 1),
      ],
    ),
  ];

  get recipes(): Recipe[] {
    return this._recipes;
  }
}
