import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DatasourceComponent } from './components/datasource/datasource.component';
import { DatasourceUploadComponent } from './components/datasource/datasource.upload/datasource.upload.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import {IconsModule} from "./icons/icons.module";
import { DatasourceFileComponent } from './components/datasource/datasource.file/datasource.file.component';
import { ButtonComponent } from './components/button/button.component';
import { DatasourceInputComponent } from './components/datasource/datasource.input/datasource.input.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DatasourceComponent,
    DatasourceUploadComponent,
    ToggleComponent,
    DatasourceFileComponent,
    ButtonComponent,
    DatasourceInputComponent
  ],
    imports: [
        BrowserModule,
        IconsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
