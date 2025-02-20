import { Component, input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  imports: [],
  template: ` <p class="m-0">{{ message() }}</p> `,
  styles: ``,
})
export class GreetingComponent {
  message = input('abc');
}
