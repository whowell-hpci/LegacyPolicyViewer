import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule, AccordionModule, ButtonsModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { AuthService } from './_services/auth.service';
import { AlertifyService } from './_services/alertify.service';
import { PolicyService } from './_services/policy.service';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { DocumentListComponent } from './documentList/documentList.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      SearchComponent,
      DocumentListComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      BsDropdownModule.forRoot(),
      AccordionModule.forRoot(),
      ButtonsModule.forRoot(),
      FormsModule,
      JwtModule.forRoot({
         config: {
            tokenGetter: tokenGetter,
            whitelistedDomains: ['http://vHPCI-CAN.hpci.local :91'],
            blacklistedRoutes: ['http://vHPCI-CAN.hpci.local :91/api/auth']
         }
      })
  ],
  providers: [
    AlertifyService,
    AuthService,
    PolicyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
