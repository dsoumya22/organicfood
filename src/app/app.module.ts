import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrendingComponent } from './trending/trending.component';
import { HomeComponent } from './home/home.component';
import { OrganicComponent } from './organic/organic.component';
import { StoreComponent } from './store/store.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';
import { ExploreourstoreComponent } from './exploreourstore/exploreourstore.component';
import { ExporeourstoreComponent } from './store/exporeourstore/exporeourstore.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    TrendingComponent,
    HomeComponent,
    OrganicComponent,
    StoreComponent,
    ContactComponent,
    FooterComponent,
    SigninComponent,
    SignoutComponent,
    ExploreourstoreComponent,
    ExporeourstoreComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
