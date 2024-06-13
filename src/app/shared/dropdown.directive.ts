import {
  AfterContentInit,
  ContentChild,
  Directive,
  ElementRef
} from '@angular/core';
import { fromEvent } from 'rxjs';

@Directive({ selector: '[appDropdown]' })
export class DropdownDirective implements AfterContentInit {
  @ContentChild('dropdownToggle', { static: true }) dropdownToggle: ElementRef;
  @ContentChild('dropdownMenu', { static: true }) dropdownMenu: ElementRef;

  ngAfterContentInit(): void {
    fromEvent(this.dropdownToggle.nativeElement, 'click').subscribe(() => {
      this.dropdownToggle.nativeElement.classList.toggle('show');
      this.dropdownMenu.nativeElement.classList.toggle('show');
    });

    fromEvent(this.dropdownMenu.nativeElement, 'click').subscribe(() => {
      this.dropdownToggle.nativeElement.classList.toggle('show');
      this.dropdownMenu.nativeElement.classList.toggle('show');
    });
  }
}
