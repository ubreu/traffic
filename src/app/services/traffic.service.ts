import { Injectable } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { Category, TrafficInfo } from '../domain/traffic-info';
import { Observable } from 'rxjs';

const endpoint = 'trafficInfo'
@Injectable({
  providedIn: 'root'
})
export class TrafficService {

  constructor(public readonly functions: AngularFireFunctions) { }

  getTrafficInfo(category: Category): Observable<TrafficInfo> {
    return this.functions.httpsCallable(endpoint, { timeout: 5_000 })({ category: category })
  }
}
