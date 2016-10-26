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

// *ngFor
import { Component } from 'angular/core';

@Component ({
  selector: 'app-root',
  // magic variables:
  // - first, last, odd, even are boolean
  // - index is numeric
  template: `<ol>
      <li *ngFor="let item of list; let o = odd;">
      <span>({{ item.id }}) isOdd: {{ o }}</span>
      <span>({{ item.id }}) isEven: {{ e }}</span>  // - just change 'let o = odd' to 'let e = even')
      <span>({{ item.id }}) isFirst: {{ f }}</span> // - just change 'let o = odd' to 'let f = first')
      <span>({{ item.id }}) index: {{ i }}</span>  // - just change 'let o = odd' to 'let i = index')
      <span>{{ item.value }}</span>
      </li>
    </ol>`,
  styles: [``]
})
export class AppComponent {
list = [
    {id: 0, value: 'zero'},
    {id: 1, value: 'one'},
    {id: 2, value: 'two'},
    {id: 3, value: 'three'},
    {id: 4, value: 'four'},
  ];
}
