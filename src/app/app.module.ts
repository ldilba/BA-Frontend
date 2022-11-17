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
// import {HighlightModule, HIGHLIGHT_OPTIONS} from 'ngx-highlightjs';
import { TransformationResultComponent } from './components/transformation/transformation.result/transformation.result.component';
import { TransformationResultItemComponent } from './components/transformation/transformation.result/transformation.result.item/transformation.result.item.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { TableComponent } from './components/table/table.component';


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
    TableComponent
  ],
  imports: [
    BrowserModule,
    IconsModule,
    FormsModule,
    NgSelectModule
    // HighlightModule
  ],
  providers: [
    // {
    //   provide: HIGHLIGHT_OPTIONS,
    //   useValue: {
    //     fullLibraryLoader: () => import('highlight.js'),
    //     // coreLibraryLoader: () => import('highlight.js/lib/core'),
    //     // lineNumbersLoader: () => import('highlightjs-line-numbers.js'), // Optional, only if you want the line numbers
    //     // languages: {
    //       // typescript: () => import('highlight.js/lib/languages/typescript'),
    //       // css: () => import('highlight.js/lib/languages/css'),
    //       // xml: () => import('highlight.js/lib/languages/xml')
    //     //   json: () => import('highlight.js/lib/languages/json')
    //     // },
    //     themePath: 'node_modules/highlight.js/styles/github.css' // Optional, and useful if you want to change the theme dynamically
    //   }
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
