import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HttpMockComponent } from './http-mock/http-mock.component';
import { FormsModule} from '@angular/forms';
import { InMemoryDataService } from './data.service';
import { InMemoryWebApiModule } from '../../node_modules/angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent,
    HttpMockComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
    , HttpClientModule
    , InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
