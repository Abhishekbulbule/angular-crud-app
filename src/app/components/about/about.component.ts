import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './about.component.html',
  styles: ``,
})
export class AboutComponent {}
