import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { relative } from 'path';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // const id = this.route.snapshot.params['id']; - only valid if we can't change the id within the page
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id']; // casting
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // Alternative method
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

}
