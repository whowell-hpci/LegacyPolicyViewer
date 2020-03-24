import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Policy } from '../_models/policy';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  baseUrl = environment.baseUrl;
  

  constructor(private http: HttpClient) { }

  

  getPolicyByNumber(id): Observable<Policy> {
    
    const headerDict = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, POST'
    }
  
    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };

    return this.http.get<Policy>(this.baseUrl + 'policy/' + id, requestOptions);
  }

  getPolicyByName(id): Observable<Policy> {
    var replacement = id.replace(" ", "%20");
    const headerDict = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET, POST'
    }
  
    const requestOptions = {
      headers: new HttpHeaders(headerDict)
    };
    return this.http.get<Policy>(this.baseUrl + 'policy/named/' + replacement, requestOptions)
  }

}
