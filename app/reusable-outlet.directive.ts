import { Directive, ViewContainerRef, OnInit } from '@angular/core';
import { ReusableService } from './reusable.service';

@Directive({
  selector: '[reusable-outlet]',
})
export class ReusableDirective implements OnInit {

  constructor(
    private viewContainerRef: ViewContainerRef,
    private reusableService: ReusableService
  ) { }

  public ngOnInit(): void {
    this.reusableService.attach(this.viewContainerRef);
  }

}
