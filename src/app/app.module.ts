import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BlobModule } from 'angular-azure-blob-service';

import {
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule,

  MatSidenavModule,
  MatListModule,
  MatCardModule,
} from '@angular/material';

import { MatBadgeModule } from '@angular/material/badge';

import { MatMenuModule } from '@angular/material/menu';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const material = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatBadgeModule,

  MatSidenavModule,
  MatListModule, MatCardModule,

  MatMenuModule
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BlobModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    material,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  exports: [
    material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
