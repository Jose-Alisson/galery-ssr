import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FileListService {

  private http = inject(HttpClient)

  constructor() { }

  list() {
    return this.http.get<any>('assets/photos.json')
  }
}
