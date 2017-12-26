import { Component, state } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
    id: Number = 10;
    serverstate: any = 'START';
    log = [];

    constructor() {
        this.serverstate = Math.random() > 0.5 ? 'STOP' : 'START';
    }

    getstate() {
        return this.serverstate;
    }

    getColor() {
        return this.serverstate === 'STOP' ? 'red' : 'green';
    }

    onList() {
        this.log.push(new Date());
    }
}
