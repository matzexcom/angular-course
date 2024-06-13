import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import {ShoppingListService} from "../../shopping/shopping-list/shopping-list.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe;

  constructor(private readonly shoppingListService: ShoppingListService) {
  }


  public addToShoppingList() {
    this.recipe.ingredients.forEach(ingredient => {
      this.shoppingListService.addIngredient(ingredient);
    })
  }
}
