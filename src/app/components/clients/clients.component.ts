import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})

export class ClientsComponent {
   clients:any[] = [
    { logo: './assets/images/icons website/clients/logos colored-01.png', alt:'logo'},
    { logo: './assets/images/icons website/clients/logos colored-03.png', alt:'logo'},
    { logo: './assets/images/icons website/clients/logos colored 2-10.png', alt:'logo'},
    { logo: './assets/images/icons website/clients/logos colored-04.png', alt:'logo'},
    { logo: './assets/images/icons website/clients/logos colored 2-03.png', alt:'logo'},
    { logo: './assets/images/icons website/clients/logos colored 2-11.png', alt:'logo'},
    { logo: './assets/images/icons website/clients/logos colored-05.png', alt:'logo'},
    { logo: './assets/images/icons website/clients/logos colored-06.png', alt:'logo'},
    { logo: './assets/images/icons website/clients/logos colored 2-04.png', alt:'logo'},
    { logo: './assets/images/icons website/clients/logos colored 2-05.png', alt:'logo'},
    { logo: './assets/images/icons website/clients/logos colored 2-02.png', alt:'logo'},
    { logo: './assets/images/icons website/clients/logos colored 2-01.png', alt:'logo'},
    { logo: './assets/images/icons website/clients/logos 3-04.png', alt:'logo'},
    { logo: './assets/images/icons website/clients/logos colored 2-08.png', alt:'logo'},
    { logo: './assets/images/icons website/clients/elmart.png', alt:'logo'},
    { logo: './assets/images/icons website/clients/logos colored 2-07.png', alt:'logo'},
    { logo: './assets/images/icons website/clients/logos colored 2-12.png', alt:'logo'},
    { logo: './assets/images/icons website/clients/logos colored 2-09.png', alt:'logo'},
    { logo: './assets/images/icons website/clients/logos 3-05.png', alt:'logo'},
    { logo: './assets/images/icons website/clients/logos 3-02.png', alt:'logo'},
    { logo: './assets/images/icons website/clients/logos 3-03.png', alt:'logo'},
    { logo: './assets/images/icons website/clients/logos 3-01.png', alt:'logo'},
  ];
}
