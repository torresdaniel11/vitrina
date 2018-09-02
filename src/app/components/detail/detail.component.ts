import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { CarService } from '../../_services/car.service';
import { Car } from '../../_models/car.model'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  width: number;
  height: number;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = Math.min(event.target.innerWidth - 32, 450);
    this.height = Math.min(event.target.innerHeight - 60, 300);
    if (this.height > this.width) {
      this.height = this.width * 0.6
    }

  }

  carId: string;
  currentCar: Car;
  images: any[];
  constructor(private cars: CarService, private route: ActivatedRoute) {
    this.images = []
    this.route.params.subscribe(params => {
      this.carId = params.carId
      this.currentCar = this.cars.getCar(this.carId)
      this.fetchImages()
    })

  }

  ngOnInit() {
    window.dispatchEvent(new Event('resize'));
  }

  fetchImages() {
    for (let img of this.currentCar.images) {
      this.images.push({ source: img })
    }
  }



}
