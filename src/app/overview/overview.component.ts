import { Component, OnInit } from '@angular/core';
import { Category } from '../domain/traffic-info';
import { PathSegment, RouteParam } from '../infra/path';
import { TrafficService } from '../services/traffic.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {
  Category = Category
  PathSegment = PathSegment
  constructor(private trafficService: TrafficService) { }
}
