import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
   services: any[] = [
    {
      image: './assets/images/icons website/branding icon-01.svg',
      alt: 'branding-icon',
      title: 'branding',
      link: '/services/branding',
    },
    {
      image: './assets/images/icons website/ui icon-01.svg',
      alt: 'ui/ux icon',
      title: 'UI / UX',
      link: '/services/ui-ux',
    },
    {
      image: './assets/images/icons website/social media management-01.svg',
      alt: 'social media icon',
      title: 'Social Media Management',
      link: '/services/social media management',

    },
    {
      image: './assets/images/icons website/camera icon-01.svg',
      alt: 'media production icon',
      title: 'Media Production',
      link: '/services/media production',
    },
    {
      image: './assets/images/icons website/media buying icon-01.svg',
      alt: 'media buying icon',
      title: 'Media Buying',
      link: '/services/media buying',

    },
    {
      image: './assets/images/icons website/event management icon-01.svg',
      alt: 'Event Management icon',
      title: 'Event Management',
      link: '/services/event management',
    },
  ];

   clients:any[] = [
    { logo: './assets/images/icons website/berrys logo white-01.png', alt:'logo'},
    { logo: './assets/images/icons website/mad logo white-01.png', alt:'logo'},
    { logo: './assets/images/icons website/neat meat logo white-01.png', alt:'logo'},
    { logo: './assets/images/icons website/greenfields icon-01.png', alt:'logo'},
    { logo: './assets/images/icons website/nozul logo white-01.png', alt:'logo'},
    { logo: './assets/images/icons website/finish line logo white-01.png', alt:'logo'},
    { logo: './assets/images/icons website/value logo white-01.png', alt:'logo'},
    { logo: './assets/images/icons website/wayup logo white-01.png', alt:'logo'},
    { logo: './assets/images/icons website/bao&t logo white-01.png', alt:'logo'},
    { logo: './assets/images/icons website/kiosk logo white-01.png', alt:'logo'},
    { logo: './assets/images/icons website/emco logo white-01.png', alt:'logo'},
    { logo: './assets/images/icons website/autune logo white-01.png', alt:'logo'},
    { logo: './assets/images/icons website/tea to go logo white-01.png', alt:'logo'},
    { logo: './assets/images/icons website/GM LOGO WHITE-01.png', alt:'logo'},
    { logo: './assets/images/icons website/Lebsy logo white-01.png', alt:'logo'},
    { logo: './assets/images/icons website/elmart logo white-01.png', alt:'logo'},
    { logo: './assets/images/icons website/project next logo white-01.png', alt:'logo'},
    { logo: './assets/images/icons website/barber truck white logo-01.png', alt:'logo'},
    { logo: './assets/images/icons website/fulltime logo white-01.png', alt:'logo'},
    { logo: './assets/images/icons website/marks clinic white logo-01.png', alt:'logo'},
    { logo: './assets/images/icons website/peak logo white-01.png', alt:'logo'},
  ];

  projects:any[]=[
    {image: './assets/images/slider/1.jpg', alt:'project'},
    {image: './assets/images/slider/2.jpg', alt:'project'},
    {image: './assets/images/slider/3.jpg', alt:'project'},
    {image: './assets/images/slider/4.jpg', alt:'project'},
    {image: './assets/images/slider/5.png', alt:'project'}
  ]


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 500,
    navText: ['<i class="fa-solid fa-chevron-left prev-solid-arrow text-second-color fa-4x" aria-hidden="true"></i><i class="fa-solid fa-chevron-left stroke-prev-arrow fa-4x" aria-hidden="true"></i>',
    '<i class="fa-solid fa-chevron-right next-solid-arrow text-second-color fa-4x" aria-hidden="true"></i><i class="fa-solid fa-chevron-right stroke-next-arrow fa-4x" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 5
      },
      940: {
        items: 6
      }
    },
    nav: true
  }
}
