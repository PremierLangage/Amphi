import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SlideComponent } from './interface/slide/slide.component';
import { PlTextComponent } from './interface/pl-text/pl-text.component';
import { AppRoutingModule } from './app-routing.module';
import { ExerciceComponent } from './interface/exercice/exercice.component';
import { InterfaceComponent } from './interface/interface.component';
import { PlatonLogoComponent } from './interface/platon-logo/platon-logo.component';
import { ExitButtonComponent } from './interface/exit-button/exit-button.component';
import { AmphiTitleComponent } from './interface/amphi-title/amphi-title.component';
import { ExitDialogComponent } from './interface/exit-button/exit-dialog/exit-dialog.component';
import { CurrentTimeComponent } from './interface/current-time/current-time.component';
import { ProgressBarComponent } from './interface/progress-bar/progress-bar.component';
import { ControlPanelComponent } from './interface/control-panel/control-panel.component';
import { InterfaceProfComponent } from './interface/interface-prof/interface-prof.component';
import { InterfaceEleveComponent } from './interface/interface-eleve/interface-eleve.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// MATERIAL
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    SlideComponent,
    PlTextComponent,
    ExerciceComponent,
    InterfaceComponent,
    PlatonLogoComponent,
    ExitButtonComponent,
    AmphiTitleComponent,
    ExitDialogComponent,
    ProgressBarComponent,
    CurrentTimeComponent,
    InterfaceProfComponent,
    InterfaceEleveComponent,
    ControlPanelComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTooltipModule,
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
