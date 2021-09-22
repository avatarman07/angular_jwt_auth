import { Component, OnDestroy, OnInit } from '@angular/core';
import CardItem from 'src/app/model/card-item';
import { DetailsServiceService } from 'src/app/_services/details-service.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  card:CardItem;

  constructor(private detailsservice: DetailsServiceService) { 
   this.detailsservice.cardSelected$.subscribe((result: CardItem) => {
      //console.log('result',result);
      this.card = result;
    });
  }

  ngOnInit(): void {}

}
