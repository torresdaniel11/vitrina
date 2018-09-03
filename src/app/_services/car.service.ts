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

  getCarsByBrand(brand: string): Car[] {
    if (!brand) return this.cars;
    brand = brand.toLowerCase();
    return this.cars.filter(car => {
      return car['brand'].toLowerCase().includes(brand);
    });
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


  formatNumber(num): string {
    num = num == undefined ? 0 : num;
    num = num.isNaN ? parseFloat(num) : num;
    var p = num.toFixed(2).split(".");
    var tot = p[0].split("").reverse().reduce(function(acc, num, i, orig) {
      return num == "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
    }, "") + "." + p[1];
    return tot.split(".")[0];
  }

}
