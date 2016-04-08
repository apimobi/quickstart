import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';
import { TopNavBarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LineComponent }      from './components/line/line.component';
import { RatpService }        from './services/ratp.service';
import 'rxjs/Rx'

import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';
import { ACCORDION_DIRECTIVES }             from 'ng2-bootstrap/ng2-bootstrap';
import { URLSearchParams, Jsonp }           from 'angular2/http';


@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES, ACCORDION_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES, TopNavBarComponent,DashboardComponent, LineComponent],
    providers: [
      ROUTER_PROVIDERS,
      RatpService,
      HTTP_PROVIDERS
    ],
    template: `
    <top-nav-bar></top-nav-bar>
    <router-outlet>
    OKOKOK<br/><br/>
    OKOKOK<br/><br/>
    OKOKOK<br/><br/>
    OKOKOK<br/><br/>
    OKOKOK<br/><br/>
    OKOKOK<br/><br/>


    </router-outlet>

    <div>
        <accordion [closeOthers]="oneAtATime">
          <accordion-group heading="Static Header, initially expanded"
                           [isOpen]="status.isFirstOpen"
                           [isDisabled]="status.isFirstDisabled">
            This content is straight in the template.
          </accordion-group>
          <accordion-group *ngFor="#group of groups" [heading]="group.title">
             {{ group?.content }}
          </accordion-group>
          <accordion-group heading="Dynamic Body Content">
            <p>The body of the accordion group grows to fit the contents</p>
            <button type="button" class="btn btn-primary btn-sm" (click)="addItem()">Add Item</button>
            <div *ngFor="#item of items">{{item}}</div>
          </accordion-group>
          <accordion-group #group [isOpen]="status.open">
            <div accordion-heading>
              I can have markup, too!
              <i class="pull-right glyphicon"
                 [ngClass]="{'glyphicon-chevron-down': group?.isOpen, 'glyphicon-chevron-right': !group?.isOpen}"></i>
            </div>
            This is just some content to illustrate fancy headings.
          </accordion-group>
        </accordion>
    </div>

    <hr>

    <footer>
      <p>&copy; 2015 Company, Inc.</p>
    </footer>

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
