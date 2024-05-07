import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  works: any[] = [
    {
      image: './assets/images/icons website/projects/WEBSITEE-1-min.webp',
      title: 'our works',
    },
    {
      image: './assets/images/icons website/projects/build-your-brand.webp',
      title: 'our works',
    },
    {
      image: './assets/images/icons website/projects/how-can-we-change-your-social-media.webp',
      title: 'our works',
    },
    {
      image: './assets/images/icons website/projects/post-02.webp',
      title: 'our works',
    },
    {
      image: './assets/images/icons website/projects/WEBSITEE-1-min.webp',
      title: 'our works',
    },
  ];

  p:number=1;
}
