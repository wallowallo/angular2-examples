// - example on how to export and use the template and style.
// - for this to work we would need a app-root and the angular/core component.
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<span>{{ hello }}</span>, {{ randomNumber }}`,
  styles: [`
    span {
      color: red;
      background-color: blue;
    }
    `]
})

export class AppComponent {
  hello = 'Hey there!'
  randomNumber: number;
  constructor() {
    setInterval(() => this.randomNumber = Math.random(), 250);
  }
}
