import { Component, OnInit } from '@angular/core';
import { ILink } from '../../interfaces/ilink';

@Component({
  selector: 'appTopbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit{
  links: Array<ILink>
  ngOnInit(): void {
    this.links = [
      { label: 'Home', url: '/'},
      { label: 'Albums', url: '/albums'},
    ]
  }

  setActiveClass = (uri: string) : string =>{
    return 'border-b-2 border-white';
  }

}
