import { Component, Input } from '@angular/core';

@Component({
  selector: 'reusable',
  template: `<h1>Reusable component {{data}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class ReusableComponent {

  public data = new Date().toGMTString();

  public ngOnInit(): void {
    console.log('== reusableComponent== ngInit ')
  }

}
