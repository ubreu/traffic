import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'
import { Observable } from 'rxjs'
import { combineLatestWith, debounceTime, distinctUntilChanged, map, tap, startWith } from 'rxjs/operators'
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


  availableNames: string[] = [""]
  category: Category = Category.CONDITION
  filteredEntities$!: Observable<TrafficEntity[]>
  entities$!: Observable<TrafficEntity[]>
  searchControl = new FormControl();
  constructor(private router: Router, private route: ActivatedRoute, private trafficService: TrafficService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.category = params.get(RouteParam.CATEGORY) as Category
      this.entities$ = this.trafficService.getTrafficInfo(this.category).pipe(
        map(i => i.Entity),
        tap(results => results.sort((x, y) => x.Name < y.Name ? -1 : 1))
      )

      this.filteredEntities$ = this.searchControl.valueChanges.pipe(
        startWith(''),
        debounceTime(300),
        distinctUntilChanged(),
        combineLatestWith(this.entities$),
        map(([filterValue, e]) => this.filter(filterValue, e)))
    })
  }

  private filter(value: string, entities: TrafficEntity[]): TrafficEntity[] {
    const filterValue = value.toLowerCase();
    return entities.filter(e => e.Name.toLowerCase().includes(filterValue))
  }

  backToOverview(): void {
    this.router.navigateByUrl(NavigationPath.overview())
  }

}
