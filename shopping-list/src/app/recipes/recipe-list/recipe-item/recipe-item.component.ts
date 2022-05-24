import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: any;

  constructor(private recipeService: RecipeService){ }
  
  ngOnInit(): void {
  }

  onSelected() {
    this.recipeService.selectedRecipe.emit(this.recipe);
  }
}
