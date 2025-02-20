import { Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { Tab2Component } from './components/tab2/tab2.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'todos',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./todos/todos.component').then(
        (module) => module.TodosComponent
      );
    },
  },
  {
    path: 'counter',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./components/counter/counter.component').then(
        (module) => module.CounterComponent
      );
    },
  },
  {
    path: 'about',
    loadComponent: () => {
      return import('./components/about/about.component').then(
        (module) => module.AboutComponent
      );
    },
    children: [
      {
        path: 'child-a',
        component: Tab2Component,
      },
      {
        path: 'child-b',
        component: CounterComponent,
      },
    ],
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '**',
    pathMatch: 'full',
    component: CounterComponent,
  },
];
