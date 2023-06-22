import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  active: boolean = false;
  @Output() activeOutput: EventEmitter<boolean> = new EventEmitter<boolean>();

  activarMenu() {
    this.active = !this.active;
    this.activeOutput.emit(this.active);
  }

}
