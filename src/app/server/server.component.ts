import { Component, EventEmitter, Output, Input } from '@angular/core';


@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {

    serverName: string;
    @Input() servers: string[] = [];

    @Output() serverAdded = new EventEmitter<{ name: string }>();
    onServerAdded() {
        this.serverAdded.emit({ name: this.serverName });
    }
}