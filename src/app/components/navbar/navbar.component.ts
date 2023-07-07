import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  init: boolean = false;
  @Input() active: boolean = false;
  @Output() activeOutput: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.init = true;
    }, 400);
  }

  activarMenu(value: boolean) {
    this.active = value;
    this.activeOutput.emit(this.active);
  }

}
