import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
// import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;
  // @Output() recipeSelected = new EventEmitter<void>(); // Added before using services

  // constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  // onSelected() { // Used before I introduced routes
  //   // this.recipeSelected.emit(); // added before using services
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }

}
