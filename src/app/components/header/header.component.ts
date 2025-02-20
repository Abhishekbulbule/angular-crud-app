import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header
      class="container-fluid bg-primary p-2 d-flex flex-row justify-content-between align-items-center"
    >
      <h2 class="text-white fs-3 fw-bold" routerLink="/">{{ title() }}</h2>
      <nav
        class="h-auto d-flex flex-row mx-2 p-1 gap-4 fw-bold justify-content-center align-items-center"
      >
        <a
          class="m-0 text-white text-decoration-none"
          routerLink="/home"
          routerLinkActive="text-decoration-underline"
          >Home</a
        >
        <a
          class="m-0 text-white text-decoration-none"
          routerLink="/todos"
          routerLinkActive="text-decoration-underline"
          >Todos</a
        >
        <a
          class="m-0 text-white text-decoration-none"
          routerLink="/counter"
          routerLinkActive="text-decoration-underline"
        >
          Counter
        </a>
        <a
          class="m-0 text-white text-decoration-none"
          routerLink="/about"
          routerLinkActive="text-decoration-underline"
        >
          About us
        </a>
      </nav>
    </header>
  `,
  styles: ``,
})
export class HeaderComponent {
  title = signal('Crud app');
}
