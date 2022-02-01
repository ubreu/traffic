import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { Observable } from 'rxjs'
import { TrafficInfo } from '../domain/traffic-info'
import { Category } from '../domain/traffic-info'
import { RouteParam } from '../infra/path';
import { TrafficService } from '../services/traffic.service'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  info$!: Observable<TrafficInfo>
  category: Category = Category.CONDITION
  constructor(private route: ActivatedRoute, private trafficService: TrafficService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.category = params.get(RouteParam.CATEGORY) as Category
      this.info$ = this.trafficService.getTrafficInfo(this.category)
    })
  }
}
