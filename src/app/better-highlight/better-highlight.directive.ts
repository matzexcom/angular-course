import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'blue';

  @HostListener('mouseenter') mouseover(event: MouseEvent) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseout(event: MouseEvent) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'transparent',
    // );
    this.backgroundColor = this.defaultColor;
  }

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}
