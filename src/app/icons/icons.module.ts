import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import {
  Upload,
  File,
  ArrowRight,
  Save,
  ArrowDown,
  Zap,
  DownloadCloud,
  ChevronDown,
  PlusSquare, Play, Download, RotateCcw
} from 'angular-feather/icons';

// Select some icons (use an object, not an array)
const icons = {
  Upload,
  File,
  ArrowRight,
  ArrowDown,
  Save,
  Zap,
  DownloadCloud,
  ChevronDown,
  PlusSquare,
  Play,
  Download,
  RotateCcw
};

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }
