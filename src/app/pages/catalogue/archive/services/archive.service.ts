import { Injectable } from '@angular/core';
import { CrudService } from '../../../shared/services/crud.service';
import { StorageService } from '../../../shared/services/storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArchiveService {

  constructor(
    private crudService: CrudService,
    private storageService: StorageService,
  ) {
  }

  uploadArchive(store, file): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('store', store );
    return this.crudService.post(`/v1/private/archive`, formData);
  }

}
