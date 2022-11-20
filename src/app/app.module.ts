import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {DatasourceComponent} from './components/datasource/datasource.component';
import {DatasourceUploadComponent} from './components/datasource/datasource.upload/datasource.upload.component';
import {ToggleComponent} from './components/toggle/toggle.component';
import {IconsModule} from "./icons/icons.module";
import {DatasourceFileComponent} from './components/datasource/datasource.file/datasource.file.component';
import {ButtonComponent} from './components/button/button.component';
import {DatasourceInputComponent} from './components/datasource/datasource.input/datasource.input.component';
import {FormsModule} from "@angular/forms";
import {TransformationComponent} from './components/transformation/transformation.component';
import {ServiceComponent} from './components/service/service.component';
import {
  TransformationCustomComponent
} from './components/transformation/transformation.custom/transformation.custom.component';
import {
  TransformationLoadComponent
} from './components/transformation/transformation.load/transformation.load.component';
import { TransformationResultComponent } from './components/transformation/transformation.result/transformation.result.component';
import { TransformationResultItemComponent } from './components/transformation/transformation.result/transformation.result.item/transformation.result.item.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { TableComponent } from './components/table/table.component';
import {CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";
import { ServiceResultComponent } from './components/service/service.result/service.result.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DatasourceComponent,
    DatasourceUploadComponent,
    ToggleComponent,
    DatasourceFileComponent,
    ButtonComponent,
    DatasourceInputComponent,
    TransformationComponent,
    ServiceComponent,
    TransformationCustomComponent,
    TransformationLoadComponent,
    TransformationResultComponent,
    TransformationResultItemComponent,
    DropdownComponent,
    TableComponent,
    ServiceResultComponent
  ],
  imports: [
    BrowserModule,
    IconsModule,
    FormsModule,
    NgSelectModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    HttpClientModule
  ],
  providers: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}
