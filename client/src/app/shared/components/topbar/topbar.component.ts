import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ILink } from '../../interfaces/ilink';
import { Router } from '@angular/router';

@Component({
  selector: 'appTopbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit{
  links: Array<ILink>
  @Output() gotoList: EventEmitter<boolean>;

  constructor(private router: Router){}

  ngOnInit(): void {
    this.links = [
      { label: 'Home', url: '/'},
      { label: 'Albums', url: '/albums'},
    ]
  }

  setActiveClass = (uri: string) : string =>{
    return 'border-b-2 border-white';
  }

  toList = (): void => {
    if(this.router.url.replace('/', '') !== 'albums'){
      this.router.navigateByUrl('/albums').then();
    }
  }

}
