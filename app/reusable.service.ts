import { Injectable, ComponentFactoryResolver, ComponentFactory, ViewContainerRef, ComponentRef, Injector } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { ReusableComponent } from './reusable.component';

@Injectable()
export class ReusableService {

  private componentRef: ComponentRef<ReusableComponent>;

  private currentViewContainerRef: ViewContainerRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private router: Router
  ) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ReusableComponent);
    this.componentRef = componentFactory.create(injector);

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart && this.currentViewContainerRef) {
        this.detach(this.currentViewContainerRef);
      }
    });
  }

  public attach(viewContainerRef: ViewContainerRef) {
    this.currentViewContainerRef = viewContainerRef;
    viewContainerRef.insert(this.componentRef.hostView);
  }

  public detach(viewContainerRef: ViewContainerRef) {
    viewContainerRef.detach(viewContainerRef.indexOf(this.componentRef.hostView));
  }

}
