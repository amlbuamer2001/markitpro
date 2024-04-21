import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {NgxPaginationModule} from 'ngx-pagination';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { WorkComponent } from './components/work/work.component';
import { FormComponent } from './components/form/form.component';
import { ClientsComponent } from './components/clients/clients.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrandingComponent } from './components/branding/branding.component';
import { UiUxComponent } from './components/ui-ux/ui-ux.component';
import { SocialMediaManagementComponent } from './components/social-media-management/social-media-management.component';
import { MediaProductionComponent } from './components/media-production/media-production.component';
import { MediaBuyingComponent } from './components/media-buying/media-buying.component';
import { EventManagementComponent } from './components/event-management/event-management.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    WorkComponent,
    FormComponent,
    ClientsComponent,
    FooterComponent,
    BrandingComponent,
    UiUxComponent,
    SocialMediaManagementComponent,
    MediaProductionComponent,
    MediaBuyingComponent,
    EventManagementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
