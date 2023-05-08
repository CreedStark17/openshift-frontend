import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CallBackendService {

  constructor(private http:HttpClient) { }


  getBackendResponse():Observable<any> {
    return this.http.get(`https://openshift-backend-from-pipeline-jpcaetano-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/hello`, {responseType: 'text'});
  }

  getItems():Observable<any> {
    return this.http.get('openshift-backend-from-pipeline.jpcaetano-dev.svc.cluster.local:8080/items');
  }
}
