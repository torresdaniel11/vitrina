import { Component, OnInit } from '@angular/core';
import { Car } from '../../_models/car.model';
import { CarService } from '../../_services/car.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnInit {

  carsToShow: Car[];
  searchText: string;
  constructor(private cars: CarService) {
    this.carsToShow = cars.getCars();

    //async mode
    // cars.getCarsAsync().then((carData: Car[]) => {
    //   this.carsToShow = carData
    // });
  }

  ngOnInit() {
    console.log(this.carsToShow)
  }


}
