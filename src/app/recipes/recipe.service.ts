import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable() 
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel', 'A super tasty Schnitzel - just awesome!',
                   'https://truffle-assets.imgix.net/pxqrocxwsjcc_1vJqlhifoQ20oGY4wy8cIi_CHICKEN-SCHNITZEL-BURGER_1920X1080-THUMBNAIL.jpg',
                    [
                        new Ingredient('Meat', 1),
                        new Ingredient('French Fries', 20)
                    ]),
        new Recipe('Big Fat Burguer', 'What else you need to say?',
                   'http://aht.seriouseats.com/images/20100331-fatburger-large.jpg',
                    [
                        new Ingredient('Buns', 2),
                        new Ingredient('Meat', 1)
                    ])
    ];

    constructor(private slService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice(); // return new array
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }
}
