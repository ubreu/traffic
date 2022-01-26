import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { TrafficInfo } from '../domain/traffic-info';
import { Observable } from 'rxjs';

const URL = "https://trafficmapsrgssr.trafficintelligence.ch/api/event/GetEventsTrafficApi/46.27634554693529,5.704062499999999,47.120753018933755,12.3009375/11,12,13,14,90/1/5/2"

@Injectable({
  providedIn: 'root'
})
export class TrafficService {

  constructor(private http: HttpClient) { }

  getTrafficInfo(): Observable<TrafficInfo> {
      return this.http.get<TrafficInfo>(URL)
  }
}
