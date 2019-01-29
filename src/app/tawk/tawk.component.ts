import { Component, OnInit, ViewChild } from '@angular/core';
import {environment} from '../../environments/environment';

declare var Tawk_API:any;

@Component({
  selector: 'app-tawk',
  template: ``,
  styles: [``]
})
export class TawkComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {

    const script = document.createElement('script');
    script.src = environment.chatURL;
    document.head.appendChild(script);
    
  }

}