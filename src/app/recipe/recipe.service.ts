import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../shopping-list/shopping-edit/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  //property:class recipe
  private recipes:Recipe[]=[
    new Recipe('Burger',
    'A hamburger with a rim of lettuce sitting on a black plate against a black background',
  'https://upload.wikimedia.org/wikipedia/commons/6/62/NCI_Visuals_Food_Hamburger.jpg',
[
  new Ingredient('meal',1),
  new Ingredient('tomato',2)
]),
  new Recipe('My Melodi',
  'They flee to the human world and shortly after arriving, Kuromi discovers the power of the Melody Key, which makes wishes come true using the power of darkness.',
  '../src/app/img/logo.jpg',
[
  new Ingredient('pink',1),
  new Ingredient('melodi',3),
  new Ingredient('spiderman',1)
]),
  ];

  getRecipes(){
    return this.recipes.slice();
  }
  addIngredientsShoppingList(ingredients: Ingredient[]){
    this.slsService.addIngredients(ingredients);
  }
  getRecipe(index:number){
    return this.recipes[index];
  }

constructor(private slsService: ShoppingListService) { }

}
