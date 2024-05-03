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
      image: './assets/images/icons website/services/branding icon-01.svg',
      alt: 'branding-icon',
      title: 'branding',
      link: '/services/branding',
    },
    {
      image: './assets/images/icons website/services/ui icon-01.svg',
      alt: 'ui/ux icon',
      title: 'UI / UX',
      link: '/services/ui-ux',
    },
    {
      image: './assets/images/icons website/services/social media management-01.svg',
      alt: 'social media icon',
      title: 'Social Media Management',
      link: '/services/social media management',

    },
    {
      image: './assets/images/icons website/services/camera icon-01.svg',
      alt: 'media production icon',
      title: 'Media Production',
      link: '/services/media production',
    },
    {
      image: './assets/images/icons website/services/media buying icon-01.svg',
      alt: 'media buying icon',
      title: 'Media Buying',
      link: '/services/media buying',

    },
    {
      image: './assets/images/icons website/services/event management icon-01.svg',
      alt: 'Event Management icon',
      title: 'Event Management',
      link: '/services/event management',
    },
  ];

   clients:any[] = [
    { logo: './assets/images/icons website/clients/berrys logo white-01.png', alt:'logo'},
    { logo: './assets/images/icons website/clients/mad logo white-01.png', alt:'logo'},
    { logo: './assets/images/icons website/clients/neat meat logo white-01.png', alt:'logo'},
    { logo: './assets/images/icons website/clients/greenfields icon-01.png', alt:'logo'},
    { logo: './assets/images/icons website/clients/nozul logo white-01.png', alt:'logo'},
    { logo: './assets/images/icons website/clients/finish line logo white-01.png', alt:'logo'},
    { logo: './assets/images/icons website/clients/value logo white-01.png', alt:'logo'},
    { logo: './assets/images/icons website/clients/wayup logo white-01.png', alt:'logo'},
    { logo: './assets/images/icons website/clients/bao&t logo white-01.png', alt:'logo'},
    { logo: './assets/images/icons website/clients/kiosk logo white-01.png', alt:'logo'},
    { logo: './assets/images/icons website/clients/emco logo white-01.png', alt:'logo'},
    { logo: './assets/images/icons website/clients/autune logo white-01.png', alt:'logo'},
    { logo: './assets/images/icons website/clients/tea to go logo white-01.png', alt:'logo'},
    { logo: './assets/images/icons website/clients/GM LOGO WHITE-01.png', alt:'logo'},
    { logo: './assets/images/icons website/clients/Lebsy logo white-01.png', alt:'logo'},
    { logo: './assets/images/icons website/clients/elmart logo white-01.png', alt:'logo'},
    { logo: './assets/images/icons website/clients/project next logo white-01.png', alt:'logo'},
    { logo: './assets/images/icons website/clients/barber truck white logo-01.png', alt:'logo'},
    { logo: './assets/images/icons website/clients/fulltime logo white-01.png', alt:'logo'},
    { logo: './assets/images/icons website/clients/marks clinic white logo-01.png', alt:'logo'},
    { logo: './assets/images/icons website/clients/peak logo white-01.png', alt:'logo'},
  ];

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
        items: 2
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
