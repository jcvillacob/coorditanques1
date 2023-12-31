import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() active!: boolean;
  selectedImg: number = 0;
  imagenes: any[] = [
    {url: '/assets/slider/12.jpg', title: 'frutas'},
    {url: 'assets/slider/imagen-1-sin-sombra.webp', title: 'frutas'},
    {url: 'assets/slider/imagen 4.webp', title: 'frutas'},
    {url: '/assets/slider/22.jpg', title: 'frutas'},
    {url: 'https://cdn.pixabay.com/photo/2020/06/29/17/41/meditate-5353620_1280.jpg', title: 'frutas'},
    {url: 'https://cdn.pixabay.com/photo/2020/02/16/20/29/nyc-4854718_1280.jpg', title: 'helado'},
    {url: 'https://cdn.pixabay.com/photo/2020/08/31/00/06/boat-5531001_1280.jpg', title: 'lapiz'},
    {url: 'https://cdn.pixabay.com/photo/2017/07/22/09/03/road-2528145_1280.jpg', title: 'mariposa'},
    {url: 'https://cdn.pixabay.com/photo/2018/01/22/13/07/couple-3098951_1280.jpg', title: 'splash'}
  ];
  cards: any[] = [
    {name: "Tractomula", ejes: 6, pesoMaximo: "34.000", galonesMax: "10.800", img: 'assets/tipoVh/tractomula.jfif'},
    {name: "Doble Troque", ejes: 3, pesoMaximo: "18.000", galonesMax: "5.500", img: 'https://images.unsplash.com/photo-1682033240184-262fdb8234cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'},
    {name: "Sencillo", ejes: 2, pesoMaximo: "10.000", galonesMax: "3.400", img: 'https://images.pexels.com/photos/5410923/pexels-photo-5410923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
  ];

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

  previewImg() {
    if(this.selectedImg !== 0) {
      this.selectedImg --
    } else {
      this.selectedImg = (this.imagenes.length - 1);
    }
  }

  nextImg() {
    if(this.selectedImg !== (this.imagenes.length - 1)) {
      this.selectedImg ++
    } else {
      this.selectedImg = 0;
    }
  }

  selectImg(i: number) {
    this.selectedImg = i;
  }

  scrollDown() {
    window.scrollBy(0, 100);
  }


  goToSection(section: number) {
    this.currentSection = section;

    const sections = document.querySelectorAll('.section');
    if (section >= 0 && section < sections.length) {
      const target = sections[section];
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
