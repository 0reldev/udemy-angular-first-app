import { Component } from '@angular/core';

@Component({
  // selector: '[app-servers]',  // [app-server] selects the component app-servers as an attribute
  // selector: '.app-servers',   // .app-servers selects the component as a class, like in CSS
  selector: 'app-servers',
  template: `
    <app-server></app-server>
    <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

}