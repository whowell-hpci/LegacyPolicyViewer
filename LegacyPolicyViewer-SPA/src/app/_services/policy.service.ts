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


  getPolicyByNumber(id): Observable<any>
  {
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers}
    return this.http.post(this.baseUrl + 'policy', {SearchId: id, type: "number"}, options);
  }

  getPolicyByName(id): Observable<any>
  {
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers}

    return this.http.post(this.baseUrl + 'policy', {SearchId: id, type: "name"}, options);
  }

  getPolicyByClaim(id): Observable<any>
  {
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers}

    return this.http.post(this.baseUrl + 'policy', {SearchId: id, type: "claim"}, options);
  }

  getAuthorizedHeader(url): Observable<any>
  {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let options = { headers: headers}

    var result = this.http.post(this.baseUrl + 'document/authorize', { Url: url }, options)
    return result;
  }



}
