import { Component, OnInit } from '@angular/core';
import { TrafficService } from '../services/traffic.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  constructor(private trafficService: TrafficService) { }
}
