import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/components/common/api';
import { Car } from '../../_models/car.model';
import { CarService } from '../../_services/car.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnInit {

  carsToShow: Car[];
  carsToCompare: Car[];
  searchText: string;
  selectMode: boolean;
  msgs: Message[] = [];
  toggleButtonText: string;
  constructor(private cars: CarService) {
    this.carsToCompare = [];
    this.carsToShow = cars.getCars();
    this.selectMode = false;
    this.toggleButtonText = "Comparar vehículos";
  }

  ngOnInit() {
  }

  toggleSelectMode() {
    this.selectMode = !this.selectMode;
    this.toggleButtonText = !this.selectMode ? "Comparar vehículos" : "Cancelar comparación";
    this.msgs = [];
    if (this.selectMode) {
      this.msgs.push({ severity: 'info', summary: 'Comparar vehículos', detail: 'Selecciona hasta 3 carros que quieras comparar' });
    }
  }

  selectToCompare(car: Car) {
    if (this.isSelected(car)) {
      this.removeSelectedCar(car)
    } else if (this.carsToCompare.length < 3) {
      this.carsToCompare.push(car);
    } else {
      alert("ya tienes 3 escogidos")
    }
  }

  /*
    param: car:Car
    Remove the car from the carsToCompare Array
  */
  removeSelectedCar(car: Car) {
    this.carsToCompare.splice(this.getArrayPosition(car), 1)
  }

  /*
    param: car:Car
    return true if the car is inside carsToCompare Array
  */
  isSelected(car: Car): boolean {
    return this.getArrayPosition(car) >= 0;
  }

  /*
    param: car:Car
      return the position of car inside carsToCompare Array
      return -1 if the car is not in the array
  */
  getArrayPosition(car: Car): number {
    return this.carsToCompare.indexOf(car)
  }

  openComparar(){
    
  }


}
