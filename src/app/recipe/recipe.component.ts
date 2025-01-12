import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css',
  providers: [RecipeService],
})
export class RecipeComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  public ngOnInit() {
    this.recipeService.recipeSelected.subscribe({
      next: (recipe: Recipe) => {
        this.selectedRecipe = recipe;
      },
    });
  }
}
