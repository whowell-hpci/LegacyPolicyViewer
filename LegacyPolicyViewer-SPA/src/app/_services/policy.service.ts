import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Policy } from '../_models/policy';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  

  // getPolicyByNumber(id): Observable<Policy> {
    
    

  //   return this.http.get<Policy>(this.baseUrl + 'policy/' + id);
  // }

  // getPolicyByName(id): Observable<Policy> {
  //   var replacement = id.replace(" ", "%20");
    
  //   return this.http.get<Policy>(this.baseUrl + 'policy/named/' + replacement)
  // }

  getPolicyByNumber(id): Observable<any>
  {
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers}
    return this.http.post(this.baseUrl + 'policy', {policyNumber: id, type: "number"}, options);
  }

  getPolicyByName(id): Observable<any>
  {
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers}

    return this.http.post(this.baseUrl + 'policy', {policyNumber: id, type: "name"}, options);
  }

}
