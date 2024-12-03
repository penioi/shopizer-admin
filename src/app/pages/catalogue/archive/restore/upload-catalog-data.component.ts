import { Component } from '@angular/core';
import { ArchiveService } from '../services/archive.service';



@Component({
    selector: 'ngx-upload-catalog',
    templateUrl: './upload-catalog-data.component.html',
    styleUrls: ['./upload-catalog-data.component.scss']
  })
export class UploadCatalogDataComponent  {

    file: File | null = null;
    message = '';

    constructor(
        private archiveService: ArchiveService) {
    }


    onFileSelected(event: Event) {
        const element = event.currentTarget as HTMLInputElement;
        this.file = element.files[0];
    }

    onFileUpload() {
        if(this.file === null) {
            return;
        }
        const res =  this.archiveService.uploadArchive('DEFAULT', this.file);
        res.subscribe( {
                error: err =>  'File ' + this.file.name + ' couldn\'t be imported! Error ' + err.message,
                complete: () => this.message = 'File ' + this.file.name + ' importted successfully!',
            },
        );
    }
}
