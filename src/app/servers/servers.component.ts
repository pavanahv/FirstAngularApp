import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  serverArr = [];
  onServerAdded(data: { name: string }) {
    this.serverArr.push(data.name);
  }
}
