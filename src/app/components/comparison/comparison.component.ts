import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../../_models/car.model';

@Component({
  selector: 'app-comparison',
  templateUrl: './comparison.component.html',
  styleUrls: ['./comparison.component.css']
})
export class ComparisonComponent implements OnInit {

  @Input("carsToCompare")
  carsToCompare: Car[]
  @Output() carsToCompareChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  clearCompare() {
    this.carsToCompare = [];
    this.carsToCompareChange.emit(this.carsToCompare)
  }

}
