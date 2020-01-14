import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatToolbarModule, MatIconModule, MatSidenavModule,
  MatListModule, MatButtonModule, MatCardModule } from '@angular/material';

import { MatDividerModule } from '@angular/material/divider';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommsInitialTemplateComponent } from './comms-initial-template/comms-initial-template.component';
import { CommsRootTemplateComponent } from './comms-root-template/comms-root-template.component';

import { SafehtmlPipe } from './Pipes/safehtml.pipe';

import { HomeComponent } from './home/home.component';
import { CommsInitialComponent } from './comms-initial/comms-initial.component';
import { CommsRootComponent } from './comms-root/comms-root.component';
import { CwlInitialComponent } from './cwl-initial/cwl-initial.component';
import { ChatOfflineComponent } from './chat-offline/chat-offline.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'comms-initial', component: CommsInitialComponent },
  { path: 'cwl-initial', component: CwlInitialComponent },
  { path: 'comms-root', component: CommsRootComponent },
  { path: 'chat-offline', component: ChatOfflineComponent},
  { path:  '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule, CommonModule,
    HttpClientModule, MatToolbarModule, MatIconModule, MatSidenavModule,
    MatListModule, MatButtonModule, MatCardModule, MatDividerModule],
  exports: [RouterModule, FormsModule, ReactiveFormsModule ],
  declarations: [ HomeComponent, CommsInitialTemplateComponent, CommsRootTemplateComponent,
    CwlInitialComponent,
    SafehtmlPipe, CommsInitialComponent, CommsRootComponent
  ]
})
export class AppRoutingModule { }
