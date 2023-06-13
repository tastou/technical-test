import { Component, OnInit } from '@angular/core';
import { Carousel, initTE } from 'tw-elements';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    initTE({ Carousel });
  }

}
