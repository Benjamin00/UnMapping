import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ResultsComponent } from './results-component/results.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing-module/routing-module.module'
import { SuiModule } from 'ng2-semantic-ui';

@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RoutingModule,
    SuiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



// So
// The problem is that everything is in App Module. I /think/ appmodule persists across every single page, so that's likely why it isn't going 
// away. Let me test something...
