import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
               'https://images-gmi-pmc.edge-generalmills.com/f7405ab7-114b-4fa7-894f-11bb575d38e0.jpg'),
    new Recipe('Another Test Recipe', 'This is simply another test',
               'https://images-gmi-pmc.edge-generalmills.com/f7405ab7-114b-4fa7-894f-11bb575d38e0.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
