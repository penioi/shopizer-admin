import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArchiveComponent } from './archive.component';
import { UploadCatalogDataComponent } from './restore/upload-catalog-data.component';

const routes: Routes = [
  {
    path: '',
    component: ArchiveComponent,
    children: [
      {
        path: 'import-catalog-data',
        component: UploadCatalogDataComponent,
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArchiveRoutingModule {
}
