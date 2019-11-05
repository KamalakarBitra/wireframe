import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockComponent } from './block/block.component';
import { WireframeComponent } from './wireframe/wireframe.component';
import { ImageComponent } from './image/image.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { AcecomponentsComponent } from './acecomponents/acecomponents.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockComponent,
    WireframeComponent,
    ImageComponent,
    TableComponent,
    FormComponent,
    AcecomponentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
