import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { student } from './model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-all-in-one',
  imports: [FormsModule, CommonModule],
  templateUrl: './all-in-one.component.html',
  styleUrl: './all-in-one.component.css'
})
export class AllInOneComponent {
  name = "";
  age = "";
  Students : student[] = [];
  student: any;

  Add(){
    let id = this.Students.length + 1;
    let newStudent : student = {id : id, name : this.name, age: +this.age}
    if(this.isValidName(this.name) && this.validAge(+this.age)){
        this.Students.push(newStudent);
    }
    console.log(this.Students);
  }

  isValidName(name: string): boolean{
    return this.name.length > 2;
  }
  validAge(age: number) : boolean{
    return (+this.age > 20 && +this.age < 40);
  }

}
 
