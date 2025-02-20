import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  template: `
    <p class="text-dark mx-2 mt-2 fw-bold">Count : {{ count() }}</p>
    <button class="btn btn-primary mx-2" (click)="increment()">+</button>
    <button class="btn btn-danger mx-2" (click)="decrement()">-</button>
    <button class="btn btn-warning mx-2" (click)="reset()">Reset</button>
  `,
  styles: ``,
})
export class CounterComponent {
  count = signal<number>(0);
  increment = () => {
    this.count.update((val) => val + 1);
  };
  decrement = () => {
    this.count() > 0 && this.count.update((val) => val - 1);
  };
  reset = () => {
    this.count.set(0);
  };
}
