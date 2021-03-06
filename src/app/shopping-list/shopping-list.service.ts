import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    getIngredients() {
        return this.ingredients.slice(); // send copy of array
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);

        // Because we only have a copy of the array - slice - we need
        // to send a notification out when that array gets updated
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // for (const ingredientItem of ingredients) {
        //     this.addIngredient(ingredientItem);
        // }

        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}
