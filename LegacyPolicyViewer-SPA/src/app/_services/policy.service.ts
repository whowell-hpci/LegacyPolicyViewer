import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Policy } from '../_models/policy';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getPolicyByNumber(id): Observable<Policy> {
    return this.http.get<Policy>(this.baseUrl + 'policy/' + id);
  }

  getPolicyByName(id): Observable<Policy> {
    var replacement = id.replace(" ", "%20");
    return this.http.get<Policy>(this.baseUrl + 'policy/named/' + replacement)
  }

}
