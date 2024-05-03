import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isOpened = false;
  toggleSidebar() {
    this.isOpened = !this.isOpened;
  }
}
