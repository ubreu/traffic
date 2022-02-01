import { Component, Input, OnInit } from '@angular/core'
import { TrafficEntity } from '../domain/traffic-info';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  constructor() { }

  @Input() entity!: TrafficEntity

}
