import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-ghsissi',
  templateUrl: './ghsissi.component.html',
  styleUrls: ['./ghsissi.component.css']
})
export class GhsissiComponent implements OnInit {

  public asana;
  constructor(public sanitize: DomSanitizer) { }

  ngOnInit(): void {
    const src1 = this.sanitize.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/AGvhzhkkFoY');
    const src2 = this.sanitize.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/owOHnu32NJ4');
    const src3 = this.sanitize.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/nAd5L8CIWTc');
    const src4 = this.sanitize.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/b53iFJ3cRis');

    this.asana = [
      {
        name: '',
        vidSrc: src1,
        details: ''
      },
      {
        name: '',
        vidSrc: src2,
        details: ''
      },
      {
        name: '',
        vidSrc: src3,
        details: ''
      },
      {
        name: '',
        vidSrc: src4,
        details: ''
      }
    ];
  }


}
