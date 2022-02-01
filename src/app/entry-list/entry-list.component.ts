import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'
import { Observable } from 'rxjs'
import { map, tap } from 'rxjs/operators'
import { TrafficEntity } from '../domain/traffic-info'
import { Category } from '../domain/traffic-info'
import { NavigationPath, RouteParam } from '../infra/path';
import { TrafficService } from '../services/traffic.service'

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.scss']
})
export class EntryListComponent implements OnInit {

  entities$!: Observable<TrafficEntity[]>
  category: Category = Category.CONDITION
  constructor(private router: Router, private route: ActivatedRoute, private trafficService: TrafficService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.category = params.get(RouteParam.CATEGORY) as Category
      this.entities$ = this.trafficService.getTrafficInfo(this.category).pipe(map(i => i.Entity))
    })
  }

  backToOverview(): void {
    this.router.navigateByUrl(NavigationPath.overview())
  }

}
