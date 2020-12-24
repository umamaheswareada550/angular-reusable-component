import { Component } from '@angular/core';

@Component({
  selector: 'home',
  template: 'Home component <ng-template reusable-outlet></ng-template>',
  styleUrls: [ './app.component.css' ]
})
export class HomeComponent  {
  name = 'Angular 5';
}
