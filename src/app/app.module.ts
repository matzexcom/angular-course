import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { FormsModule } from '@angular/forms';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { NgOptimizedImage } from '@angular/common';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeComponent,
    ShoppingComponent,
    DropdownDirective,
  ],
  imports: [BrowserModule, FormsModule, NgOptimizedImage],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
