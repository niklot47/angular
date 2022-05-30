import {Component, OnInit} from '@angular/core';
import {CarService} from "../../services";
import {ICar} from "../../interfaces";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {regex} from "../../constants";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: ICar[];
  carForUpdate: ICar|null;
  form: FormGroup;

  constructor(private carService: CarService) {
    this._formInit();
  }

  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomModel(): string {
    let min = Math.ceil(0);
    let max = Math.floor(9);
    let model: string;

    switch (Math.floor(Math.random() * (max - min + 1)) + min) {
      case 0 :
        model = 'BMW'
        break;
      case 1 :
        model = 'Lada'
        break;
      case 2 :
        model = 'Volvo'
        break;
      case 3 :
        model = 'Volkswagen'
        break;
      case 4 :
        model = 'Dacia'
        break;
      case 5 :
        model = 'Dodge'
        break;
      case 6 :
        model = 'Jeep'
        break;
      case 7 :
        model = 'KIA'
        break;
      case 8 :
        model = 'Mercedes'
        break;
      case 9 :
        model = 'Opel'
        break;
      default:
        model = 'Opel'
    }
    return model;
  }

  ngOnInit(): void {
    this.carService.getAll().subscribe(value => {
      console.log("get all cars: ", value);
      this.cars = value;
    })
  }

  _formInit(): void {
    this.form = new FormGroup({
      model: new FormControl(this.getRandomModel(), [Validators.pattern(regex.model)]),
      year: new FormControl(this.getRandomInt(1990, new Date().getFullYear()), [Validators.min(1990), Validators.max(new Date().getFullYear())]),
      price: new FormControl(this.getRandomInt(10, 50) * 100, [Validators.min(0), Validators.max(1000000)]),
    })
  }

  save() {
    let newCar = this.form.getRawValue();

    if (!this.carForUpdate) {
      this.carService.create(newCar).subscribe(() => {
        this.carService.getAll().subscribe(value => this.cars = value)
      });
    }else{
      this.carService.updateById(this.carForUpdate.id, newCar).subscribe(() => {
        this.carService.getAll().subscribe(value => this.cars = value)
        this.carForUpdate = null;
      });
    }

    this.form.setValue({
      model: this.getRandomModel(),
      year: this.getRandomInt(1990, new Date().getFullYear()),
      price: this.getRandomInt(10, 50) * 100
    })
  }

  delete(id: number): void {
    this.carService.deleteById(id).subscribe(() => this.cars = this.cars.filter(car => car.id !== id))
  }


  update(car: ICar): void {
    this.carForUpdate = car;
    this.form.setValue({model: car.model, year: car.year, price: car.price})
  }

  cancel(): void {
    this.carForUpdate = null;
  }
}
