import {Component, OnInit} from '@angular/core';

class Traveler {
  name: string;
  position: string;
  picture: string;
}

@Component({
  selector: 'app-traveler',
  templateUrl: './traveler.component.html',
  styleUrls: ['./traveler.component.css']
})
export class TravelerComponent implements OnInit {
  travelers: Traveler[];

  constructor() {
    this.travelers = [
      {
        name: 'Simon Kavagnah',
        position: 'Driver',
        picture: '/assets/images/travelers/chris-benson-344429.jpg'
      },
      {
        name: 'Alice Pearson',
        position: 'Coordinator',
        picture: '/assets/images/travelers/michael-dam-258165.jpg'
      },
      {
        name: 'Mike Henry',
        position: 'Photographer',
        picture: '/assets/images/travelers/lucas-sankey-378674.jpg'
      }
    ];
  }

  ngOnInit() {
  }

}
