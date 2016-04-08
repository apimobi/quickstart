import { Component } from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'top-nav-bar',
    templateUrl: './app/components/navbar/navbar.component.html',
    directives: [ROUTER_DIRECTIVES],
})

export class TopNavBarComponent {
  constructor() {
    console.log('oiiiiiiiiiiiiii');
  }
}
