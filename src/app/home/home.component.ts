import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import CardItem  from '../model/card-item';
import { DetailsServiceService } from '../_services/details-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;
  items: CardItem[] = [];

  constructor(private userService: UserService, private detailsservice: DetailsServiceService) {}

  ngOnInit(): void {
    /*this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );*/
    for(let i = 0; i< 5; i++) {
      let item: CardItem = {
        image: "https://res.cloudinary.com/practicaldev/image/fetch/s--DYfpZirq--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://miro.medium.com/max/990/1%2AOc2PsJ-QKOUG2I8J3HNmWQ.png",
        title: "Title image " + (i + 1),
        description: "Imagen para el aws challenge."
      };
      this.items.push(item);
    }
  }

  selectCard(item: CardItem) {
    //console.log('item selected', item);
    this.detailsservice.CardSelected(item);
  }
}
