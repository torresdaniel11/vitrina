import { Injectable } from '@angular/core';
import { Car } from '../_models/car.model';
import { CarData } from '../_data/car-data';

@Injectable({
  providedIn: 'root'
})

export class CarService {

  cars: Car[];
  constructor() {
    this.cars = CarData;
  }

  getCars(): Car[] {
    return this.sortByBrand(this.cars);
  }

  getCar(carId: string): Car {
    for (let car of this.cars) {
      if (car.carId == carId) {
        return car
      }
    }
    return;
  }

  sortByBrand(array: any[]): any[] {
    array.sort((a: any, b: any) => {
      if (a['brand'] < b['brand']) {
        return -1;
      } else if (a['brand'] > b['brand']) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
