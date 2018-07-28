import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HttpMockComponent } from './http-mock/http-mock.component';
import { FormsModule} from '@angular/forms';
import { InMemoryDataService } from './data.service';
import { InMemoryWebApiModule } from '../../node_modules/angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { Route2Component } from './route2/route2.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { NavRoutingModule } from './nav-routing/nav-routing.module';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { ParaRoutingModule } from './para-routing/para-routing.module';
import { ParaPage1Component } from './para-page1/para-page1.component';
import { ParaPage2Component } from './para-page2/para-page2.component';

@NgModule({
  declarations: [
    AppComponent,
    HttpMockComponent,
    Route2Component,
    HomeComponent,
    NavComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
    ParaPage1Component,
    ParaPage2Component
  ],
  imports: [
    BrowserModule
    , FormsModule
    , HttpClientModule
    , InMemoryWebApiModule.forRoot(InMemoryDataService)
    , AppRoutingModule
    , NavRoutingModule
    , ParaRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
