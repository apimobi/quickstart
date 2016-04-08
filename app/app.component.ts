import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import { TopNavBarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LineComponent }      from './components/line/line.component';
import { RatpService }        from './services/ratp.service';
import 'rxjs/Rx'

import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import { URLSearchParams, Jsonp }           from 'angular2/http';


@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES, TopNavBarComponent,DashboardComponent, LineComponent],
    providers: [
      ROUTER_PROVIDERS,
      RatpService,
      HTTP_PROVIDERS
    ],
    template: `
    <top-nav-bar></top-nav-bar>
    <router-outlet></router-outlet>
    `
})

@RouteConfig([
  {
  path: '/dashboard',
  name: 'Dashboard',
  component: DashboardComponent,
  useAsDefault: true
  },
  {
    path: '/lines',
    name: 'Lines',
    component: LineComponent
  }
])

export class AppComponent {
  public oneAtATime:boolean = true;
  public items:Array<string> = ['Item 1', 'Item 2', 'Item 3'];

  public status:Object = {
    isFirstOpen: false,
    isFirstDisabled: false
  };

  public groups:Array<any> = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  public addItem():void {
    this.items.push(`Items ${this.items.length + 1}`);
  }
}
