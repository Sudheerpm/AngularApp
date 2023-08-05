import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http";
import { AdjusterService } from "./adjuster.service";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdjusterComponent } from './adjuster/adjuster.component';
import { ShowAdjusterComponent } from './adjuster/show-adjuster/show-adjuster.component';
import { AddEditAdjusterComponent } from './adjuster/add-edit-adjuster/add-edit-adjuster.component';

@NgModule({
  declarations: [
    AppComponent,
    AdjusterComponent,
    ShowAdjusterComponent,
    AddEditAdjusterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AdjusterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
