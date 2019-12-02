import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(environment.baseurl + environment.apiendpoint + 1);
  }

  getincidentdata(id) {

    // this.http.authorizeRequests()
    // .anyRequest().authenticated().and()
    // .x509()
    //     .subjectPrincipalRegex("CN=(.*?)(?:,|$)")
    //     .userDetailsService(userDetailsService());

    // return this.http.get(environment.baseurl + environment.apiendpoint);
    return this.http.get(environment.baseurl + environment.apiendpoint + id );
  }

  getCustomerList() {
    return this.http.get(environment.blobURL);
  }
}
