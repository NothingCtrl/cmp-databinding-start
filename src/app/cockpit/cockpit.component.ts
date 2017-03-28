import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
    @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
    @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
    // newServerName = '';
    newServerContent = '';

    constructor() {
    }

    ngOnInit() {
    }

    onAddServer(serverName: HTMLInputElement) {
        console.log(serverName.value);
        this.serverCreated.emit({
            serverName: serverName.value,
            serverContent: this.newServerContent
        });
    }

    onAddBlueprint(serverName: HTMLInputElement) {
        this.blueprintCreated.emit({
            serverName: serverName.value,
            serverContent: this.newServerContent
        });
    }

}
