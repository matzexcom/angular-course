import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  constructor(
    public name: string,
    public description: string,
    public imagePath: string,
    public imageAlt: string,
    public ingredients: Ingredient[],
  ) {}
}
