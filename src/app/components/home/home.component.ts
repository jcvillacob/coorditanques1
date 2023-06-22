import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() active!: boolean;

  currentSection = 0;

  @HostListener('window:wheel', ['$event'])
  onWindowScroll(event: any) {
    if (event.deltaY > 0) {
      // Scrolling down
      this.goToSection(this.currentSection + 1);
    } else {
      // Scrolling up
      this.goToSection(this.currentSection - 1);
    }
  }

  ngOnInit() {}

  goToSection(section: number) {
    this.currentSection = section;

    const sections = document.querySelectorAll('.section');
    if (section >= 0 && section < sections.length) {
      const target = sections[section];
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
