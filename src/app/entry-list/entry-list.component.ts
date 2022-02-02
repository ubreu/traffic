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
  loading = true

  constructor(private router: Router, private route: ActivatedRoute, private trafficService: TrafficService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.category = params.get(RouteParam.CATEGORY) as Category
      this.entities$ = this.trafficService.getTrafficInfo(this.category).pipe(
        tap(i => this.loading = false),
        map(i => i.Entity),
        tap(results => results.sort((x, y) => x.Name < y.Name ? -1 : 1))
      )
    })
  }

  backToOverview(): void {
    this.router.navigateByUrl(NavigationPath.overview())
  }

}
