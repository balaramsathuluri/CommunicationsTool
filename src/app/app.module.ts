import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BlobModule } from 'angular-azure-blob-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { ChatOfflineComponent } from './chat-offline/chat-offline.component';


const material = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatBadgeModule,

  MatSidenavModule,
  MatListModule, MatCardModule,

  MatMenuModule,

  FormsModule,
  ReactiveFormsModule
];

@NgModule({
  declarations: [
    AppComponent,
    ChatOfflineComponent
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
