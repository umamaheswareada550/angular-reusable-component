import { Component } from '@angular/core';

@Component({
  selector: 'test',
  template: 'Test component <ng-template reusable-outlet></ng-template>',
  styleUrls: [ './app.component.css' ]
})
export class TestComponent  {
  name = 'Angular 5';
}
