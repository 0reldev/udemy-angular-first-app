import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',  // [app-server] selects the component app-servers as an attribute
  // selector: '.app-servers',   // .app-servers selects the component as a class, like in CSS
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  
  allowNewServer = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }
}