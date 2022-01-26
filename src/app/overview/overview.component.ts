import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TrafficInfo } from '../domain/traffic-info';
import { TrafficService } from '../services/traffic.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {

  constructor(private trafficService: TrafficService) { }

  info: Observable<TrafficInfo> = this.trafficService.getTrafficInfo()


}
