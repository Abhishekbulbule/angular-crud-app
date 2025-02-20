import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  isCompleted = input(false);
  el = inject(ElementRef);
  constructor() {}
  styleEffect = effect(() => {
    if (this.isCompleted()) {
      this.el.nativeElement.style.backgroundColor = 'green';
      this.el.nativeElement.style.color = 'white';
    }
  });
}
