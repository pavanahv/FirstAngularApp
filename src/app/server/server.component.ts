import { Component, EventEmitter, Output, Input, ViewChild } from '@angular/core';


@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {

    @ViewChild('contentp') content;
    serverName: string;
    @Input() servers: string[] = [];

    @Output() serverAdded = new EventEmitter<{ name: string }>();
    onServerAdded() {
        this.serverAdded.emit({ name: this.serverName });
    }
    clicked(ref) {
        console.log(ref.innerText);
        console.log(this.content.nativeElement.innerText);
    }
}