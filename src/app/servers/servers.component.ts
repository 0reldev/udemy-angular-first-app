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

  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName: string ='TestServer';
  serverCreated: boolean = false;
  servers: string[] = ['Test server 1', 'Test server 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  } 

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' +  this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}