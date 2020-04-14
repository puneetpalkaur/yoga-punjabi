import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pranayama',
  templateUrl: './pranayama.component.html',
  styleUrls: ['./pranayama.component.css']
})
export class PranayamaComponent implements OnInit {
 public pranayama;
  constructor() {

    this.pranayama = [
      {
        name: 'ਬ੍ਰਹਮਰੀ',
        imgSrc: 'https://storage.googleapis.com/punjabi-yoga/icons/brahmri.png',
        details: ''
      },
      {
        name: 'ਅਨੁਲੋਮ ਵਿਲੋਮ',
        imgSrc: 'https://storage.googleapis.com/punjabi-yoga/icons/anulom_vilom.png',
        details: ''
      },
      {
        name: 'ਕਪਾਲ ਭਾਤੀ',
        imgSrc: 'https://storage.googleapis.com/punjabi-yoga/icons/kapaal_bhaati.png',
        details: ''
      },
      {
        name: 'ਅਗਨੀਸਰ',
        imgSrc: 'https://storage.googleapis.com/punjabi-yoga/icons/agnisar_kriya.png',
        details: ''
      }
    ];
  }

  ngOnInit(): void {
  }

}
