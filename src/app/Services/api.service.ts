import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap,catchError} from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Incident } from './incident';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { } 

  getincidentdata(id):Observable<Incident> { 
    
    console.log('Calling GetIncident Data with incident id: '+ id); 

    return this.http.get<Incident>(environment.baseurl + environment.apiendpoint + id ).pipe(
      tap(data=> console.log('Incident Json'+ JSON.stringify(data))),
      catchError(this.handleError)      
    );
  }

  getCustomerList() {
    return this.http.get(environment.blobURL).pipe(
      tap( incidentJson=> console.log('Inicdent Json: '+ JSON.stringify(incidentJson))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse){
    let errorMessage ='';

    if(err.error instanceof ErrorEvent){
      errorMessage =`An error occured while fetching incident details: ${err.error.message}`;
    }
    else{
      errorMessage =`Serve returned code : ${err.status}, error message is : ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
