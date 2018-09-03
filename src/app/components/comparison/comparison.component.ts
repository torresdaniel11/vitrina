import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../../_models/car.model';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css']
})
export class ComparisonComponent implements OnInit {

  @Input("carsToCompare")
  carsToCompare: Car[]
  constructor() { }

  ngOnInit() {
  }

}
