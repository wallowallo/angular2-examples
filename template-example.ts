// - example on how to export and use the template and style.
// - for this to work we would need a app-root and the angular/core component.
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<span>{{ hello }}</span>, <div>Random Number: {{ randomNumber }}</div>`,
  styles: [`
    span {
      color: red;
      background-color: blue;
    }
    div {
      color: blue;
      background-color: white;
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

// - on click example

@Component ({
  selector: 'app-root',
  template: `
  <button (click)="onClick()">{{ label }}</button>
  <span>{{ randomString }}</span>` ,
  styles: [``]
})
export class AppComponent {
  label = 'randomize';
  randomString = Math.random(); + '';
  onClick() {
    this.randomString = Math.random() + '';
  };
}
