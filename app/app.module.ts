import { NgModule, } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ReusableComponent } from './reusable.component';
import { HomeComponent } from './home.component';
import { TestComponent } from './test.component';

import { ReusableDirective } from './reusable-outlet.directive';
import { ReusableService } from './reusable.service';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'test', component: TestComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ReusableService],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    TestComponent,
    ReusableDirective,
    ReusableComponent
  ],
  entryComponents: [ReusableComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
