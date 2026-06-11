import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { ContentComponent } from './content/content.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SelfComponent } from './self.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { GrandChildComponent } from './grand-child/grand-child.component';   
import { UserDetailsComponent } from './userDetails/userDetails.component';
import { UpdateColorDirective } from './Directive/update-color.directive';
import { ShowPasswordDirective } from './Directive/show-password.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftNavComponent,
    ContentComponent,
    HomePageComponent,
    AboutComponent,
    ContactComponent,
    SelfComponent,
    ParentComponent,
    ChildComponent,
    GrandChildComponent,
    UserDetailsComponent,
    UpdateColorDirective,
    ShowPasswordDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
