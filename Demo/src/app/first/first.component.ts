import { Component } from '@angular/core';
import { Motorcycle } from '../Models/motorcycle';
import { MotorcycleService } from '../Services/motorcycle.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  constructor(private motorcycleService: MotorcycleService){}

  text:string = "This is a website about motorcycles!";
  showSecondRow:boolean = false;
  my_list: string[] = ['Standard/Naked', 'Cruiser', 'Enduro', 'Chopper', 'Sport', 'Touring', '& many more']
  inputValue: string = '';
  motorcyclesFromDB: Motorcycle[] = [];
  newMotorcycleBrand: string = '';
  newMotorcycleType: string = '';
  newMotorcycleModel: string = '';

  changeText():void{
    this.text = "Informations about motorcycles";
  }

  showMoreButtons(){
    this.showSecondRow = true;
  }

  showLessButtons(){
    this.showSecondRow = false;
  }
  
  getMotorcycles(){
    this.motorcycleService.getMotorcycles().subscribe(result=>
      {
        this.motorcyclesFromDB = result;
      });
  }
  addMotorcycle(){
    let newMotorcycle = {Brand: this.newMotorcycleBrand, Model: this.newMotorcycleModel, Type: this.newMotorcycleType};
    this.motorcycleService.addMotorcycles(newMotorcycle);
  }

}