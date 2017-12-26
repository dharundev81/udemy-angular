import { Component } from '@angular/core';
import { Console } from '@angular/core/src/console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public name: any;
  button = false;
  ServerChange = 'Server INIT';
  eventvalue: any;

  constructor() {
    setTimeout(() => {
      this.button = true;
    }, 2000);
  }

  onCreateServer() {
    this.ServerChange = 'Server Implement by Dharun';
  }

  onUpdate(event: any) {
    // console.log(event);
    this.eventvalue = <HTMLInputElement>event.target.value;
  }
}
