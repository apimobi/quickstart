import { Component, OnInit } from 'angular2/core';
import { Line } from '../../model/line';
import { Destination } from '../../model/destination';
import { RatpService } from '../../services/ratp.service';

import { Router } from 'angular2/router';

@Component({
  selector: 'my-lines',
  templateUrl: './app/components/line/line.component.html'
})
export class LineComponent implements OnInit {
  lines: Line[] = [];
  constructor(
    private _router: Router,
    private _ratpService: RatpService) {
  }
  ngOnInit() {
    this._ratpService.getLines('rers').subscribe(heroes => this.okResponse(heroes));
    //this._brandalleyService.getProducts('C-1812517-blouses%2c-tuniques/N-12824-univers~femme').subscribe(products => this.okResponse(products));
  }

  okResponse(data)
  {
    console.log('lineComponent');
    var response = data.response.rers;
    var line = <Line>{};
    var i = 0;
    var dest = <Destination>{};
    for (var key in response) {
      line = <Line>{};
      line.destinations = [];
      line.name = response[key]['line'];
      var destinations = response[key]['destinations'];
      for (var j in destinations) {
          dest = <Destination>{};
          dest.id_destination = destinations[j]['id_destination'];
          dest.name = destinations[j]['name'];
          dest.slug = destinations[j]['slug'];
          line.destinations.push(dest);
      }
      line.id = i;
      this.lines.push(line);
      i++;
      console.log(response[key]);

    }
  }

  // gotoDetail(hero: Hero) {
  //   let link = ['HeroDetail', { id: hero.id }];
  //   this._router.navigate(link);
  // }
}
