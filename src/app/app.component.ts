import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  active!: boolean;

  handleActiveOutput(value: boolean) {
    this.active = value;
  }

  activarMenu(value: boolean) {
    this.active = value;
  }
}
