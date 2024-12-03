import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { ArchiveRoutingModule } from './archive-routing.module';
import { ArchiveComponent } from './archive.component';
import { UploadCatalogDataComponent } from './restore/upload-catalog-data.component';
import { NgxSummernoteModule } from 'ngx-summernote';
import { NbDialogModule } from '@nebular/theme';

@NgModule({
declarations: [
    ArchiveComponent,
    UploadCatalogDataComponent,
  ],
  imports: [
    ArchiveRoutingModule,
    SharedModule,
    NgxSummernoteModule,
    NbDialogModule.forChild(),
  ]
})
export class ArchiveModule {
}
