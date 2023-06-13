import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit{
  showWith: string;

  ngOnInit(): void {
    this.showWith = 'card';
  }



  changeViewer = (view: string): void =>{
    this.showWith = view;
  }
}
