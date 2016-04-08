import { Component, OnInit } from 'angular2/core';
import { Line } from '../../model/line';
import { RatpService } from '../../services/ratp.service';
import { Router } from 'angular2/router';
// import {Http, HTTP_PROVIDERS} from 'angular2/http';



@Component({
  selector: 'my-dashboard',
  templateUrl: './app/components/dashboard/dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  lines: Line[] = [];
  constructor(
    private _router: Router,
    private _ratpService: RatpService) {
  }
  ngOnInit() {
    // this._heroService.getUsers('users')
    //                      .then(heroes => this.okResponse(heroes));
    this._ratpService.getLines('rers').subscribe(heroes => this.okResponse(heroes));
  }


  okResponse(data)
  {
    // var data = JSON.parse(dataResult);
    var line = <Line>{};
    var i = 0;
    for (var key in data) {
      line = <Line>{};
      line.name = data[key]['username'];
      line.id = i;
      this.lines.push(line);
      i++;//
    }
  }

  // gotoDetail(hero: Hero) {
  //   let link = ['HeroDetail', { id: hero.id }];
  //   this._router.navigate(link);
  // }
}
