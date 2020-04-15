import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverName = '';
  serverStatus = false;
  showServerDetails = true;
  serverArr = [];
  serverReqCount = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onServerNameUpdated() {
    if (this.serverName.length > 0) {
      this.serverStatus = true;
    } else {
      this.serverStatus = false;
    }
  }

  onResetServerName() {
    this.serverName = '';
    this.onServerNameUpdated();
  }

  onDisplayServerDetails() {
    this.showServerDetails = !this.showServerDetails;
    this.serverReqCount++;
    this.serverArr.push(this.serverReqCount);
  }

  getLimitStatus() {
    if (this.serverArr.length > 5) {
      return true;
    } else {
      return false;
    }
  }
}
