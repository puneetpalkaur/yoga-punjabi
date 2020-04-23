import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-asana',
  templateUrl: './asana.component.html',
  styleUrls: ['./asana.component.css']
})
export class AsanaComponent implements OnInit {
  public asana;
  constructor(public sanitize: DomSanitizer) { }

  ngOnInit(): void {
    const src1 = this.sanitize.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/FA-PB4zz-5A');
    const src2 = this.sanitize.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/A-2d04ON9hA');
    const src3 = this.sanitize.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/-IpD65cn5n0');
    const src4 = this.sanitize.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/3kb2sE8mZq0');

    this.asana = [
      {
        name: 'ਤਾੜ ਆਸਣ',
        vidSrc: src1,
        details: ''
      },
      {
        name: 'ਵ੍ਰਿੱਖਸ਼ ਆਸਣ',
        vidSrc: src2,
        details: ''
      },
      {
        name: 'ਤ੍ਰਿਕੋਣ ਆਸਣ',
        vidSrc: src3,
        details: ''
      },
      {
        name: 'ਭੁਜੰਗ ਆਸਣ',
        vidSrc: src4,
        details: ''
      }
    ];
  }

}
