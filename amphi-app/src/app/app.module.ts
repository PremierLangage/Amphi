import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ExerciceComponent } from './interface/exercice/exercice.component';
import { InterfaceComponent } from './interface/interface.component';
import { ExitDialogComponent } from './interface/exit-dialog/exit-dialog.component';

// MATERIAL
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterfaceEleveComponent } from './interface-eleve/interface-eleve.component';
import { InterfaceProfComponent } from './interface-prof/interface-prof.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { SlideComponent } from './interface/slide/slide.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InterfaceEleveComponent,
    InterfaceProfComponent,
    ExitDialogComponent,
    InterfaceComponent,
    ExerciceComponent,
    SlideComponent,
    AppComponent,
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
