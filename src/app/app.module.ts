import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { DataComponent } from './data/data.component';
import { NgIfDemoComponent } from './ng-if-demo/ng-if-demo.component';
import { NgForDemoComponent } from './ng-for-demo/ng-for-demo.component';
import { NgSwitchDemoComponent } from './ng-switch-demo/ng-switch-demo.component';
import { DirectiveDemoDirective } from './directive-demo.directive';
import { EventBindingDemoComponent } from './event-binding-demo/event-binding-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DataComponent,
    NgIfDemoComponent,
    NgForDemoComponent,
    NgSwitchDemoComponent,
    DirectiveDemoDirective,
    EventBindingDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
