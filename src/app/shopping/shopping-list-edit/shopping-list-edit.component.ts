import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrl: './shopping-list-edit.component.css',
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput') nameInput: ElementRef<HTMLInputElement>;
  @ViewChild('amountInput') amountInput: ElementRef<HTMLInputElement>;
  @Output() onShoppingListAdded = new EventEmitter<Ingredient>();

  onItemAdd(): void {
    const { value: name } = this.nameInput.nativeElement;
    const { value: amount } = this.amountInput.nativeElement;
    this.onShoppingListAdded.emit({ name, amount: parseInt(amount) });
  }
}
