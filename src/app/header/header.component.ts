import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../dashboard/dashboard.component.css']
})
export class HeaderComponent implements OnInit {
  enableP = false;
  enableA = false;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const path = this.route.snapshot.url[0] ? this.route.snapshot.url[0].path : 'NA';
    if (path === 'pranayama') {
      this.enableP = true;
    } else if (path === 'asana') {
      this.enableA = true;
    }
  }
}
