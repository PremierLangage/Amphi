import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SlideComponent } from './interface/slide/slide.component';
import { AppRoutingModule } from './app-routing.module';
import { ExerciceComponent } from './interface/exercice/exercice.component';
import { InterfaceComponent } from './interface/interface.component';
import { ExitDialogComponent } from './interface/exit-button/exit-dialog/exit-dialog.component';
import { PlatonLogoComponent } from './interface/platon-logo/platon-logo.component';
import { CurrentTimeComponent } from './interface/current-time/current-time.component';
import { InterfaceProfComponent } from './interface/interface-prof/interface-prof.component';
import { InterfaceEleveComponent } from './interface/interface-eleve/interface-eleve.component';

// MATERIAL
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { ExitButtonComponent } from './interface/exit-button/exit-button.component';

@NgModule({
  declarations: [
    InterfaceEleveComponent,
    InterfaceProfComponent,
    ExitDialogComponent,
    InterfaceComponent,
    ExerciceComponent,
    SlideComponent,
    AppComponent,
    CurrentTimeComponent,
    PlatonLogoComponent,
    ExitButtonComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    MatSlideToggleModule,
    AppRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
