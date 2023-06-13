import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit{
  showWith: string;
  albums: Array<any>;

  ngOnInit(): void {
    this.showWith = 'card';
    this.albums = ['album 1'];
  }



  changeViewer = (view: string): void =>{
    this.showWith = view;
  }
}
