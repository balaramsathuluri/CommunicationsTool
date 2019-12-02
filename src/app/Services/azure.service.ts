import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AzureService {
  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get('assets/projects.json');
  }

  getincidentdata(id) {
    id = id + 1;
    return this.http.get(environment.baseurl + environment.apiendpoint + id);
  }
}





