// - *ngIf
import { Component } from 'angular/core';

@Component ({
  selector: 'app-root',
  template: `<button (click)="onClick()">
      {{ visible ? 'hide' : 'show' }}</button>
      <span>*ngIf="visible">{{ someString }}</span>`,
  styles: [``]
})
export class AppComponent {
  someString = 'Hello world';
  visible = false;
  onClick() {
    this.visible = !this.visible;
  };
}
