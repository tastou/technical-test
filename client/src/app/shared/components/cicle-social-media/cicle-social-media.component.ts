import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'appCircleSocialMedia',
  templateUrl: './cicle-social-media.component.html',
  styleUrls: ['./cicle-social-media.component.scss']
})
export class CicleSocialMediaComponent implements OnInit{
  safeHtml: SafeHtml;
  @Input('icon') icon: string;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}
