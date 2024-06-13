import { Ingredient } from '../../shared/ingredient.model';

export class ShoppingListService {
  private _ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Banana', 1),
  ];
  get ingredients(): Ingredient[] {
    return this._ingredients;
  }

  public addIngredient(ingredient: Ingredient) {
    this._ingredients.push(ingredient);
  }
}
