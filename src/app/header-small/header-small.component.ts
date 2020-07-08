import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-header-small',
  templateUrl: './header-small.component.html',
  styleUrls: ['./header-small.component.css']
})
export class HeaderSmallComponent implements OnInit {

  enableP = false;
  enableA = false;
  enableI = false;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const path = this.route.snapshot.url[0] ? this.route.snapshot.url[0].path : 'NA';
    if (path === 'pranayama') {
      this.enableP = true;
    } else if (path === 'asana') {
      this.enableA = true;
    } else if (path === 'ghsissi') {
      this.enableI = true;
    }
  }

}
