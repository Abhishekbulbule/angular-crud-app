import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent],
  template: `
    <div class="container-fluid ">
      <div
        class="d-flex flex-column justify-content-center align-items-center h-auto mt-3"
      >
        <div
          class="d-flex flex-row justify-content-center align-items-center h-auto mt-3"
        >
          <p class="m-0">Typed Value --&nbsp;</p>
          <app-greeting [message]="greeting()" />
        </div>
        <input
          type="text"
          class="mt-1"
          [value]="greeting()"
          (input)="onChange($event)"
        />
      </div>
    </div>
  `,
  styles: ``,
})
export class HomeComponent {
  greeting = signal('hello greeting component');
  onChange = (e: any) => {
    this.greeting.update(() => e?.target?.value);
  };
}
