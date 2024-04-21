import { EventManagementComponent } from './components/event-management/event-management.component';
import { MediaBuyingComponent } from './components/media-buying/media-buying.component';
import { MediaProductionComponent } from './components/media-production/media-production.component';
import { SocialMediaManagementComponent } from './components/social-media-management/social-media-management.component';
import { UiUxComponent } from './components/ui-ux/ui-ux.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkComponent } from './components/work/work.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ServicesComponent } from './components/services/services.component';
import { BrandingComponent } from './components/branding/branding.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent,title:'home'},
  {path:'about', component:AboutComponent, title:'about'},
  {path:'services', component:ServicesComponent, title:'services'},
  {path:'services/branding', component:BrandingComponent, title:'Banding'},
  {path:'services/ui-ux', component:UiUxComponent, title:'UI/UX'},
  {path:'services/social media management', component:SocialMediaManagementComponent, title:'Social Media Management'},
  {path:'services/media production', component:MediaProductionComponent, title:'Media Production'},
  {path:'services/media buying', component:MediaBuyingComponent, title:'Media Buying'},
  {path:'services/event management', component:EventManagementComponent, title:'event management'},
  {path:'ourwork', component:WorkComponent, title:'our work'},
  {path:'clients', component:ClientsComponent, title:'clients'},
  {path:'contactus', component:ContactComponent, title:'contact us'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled', useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
