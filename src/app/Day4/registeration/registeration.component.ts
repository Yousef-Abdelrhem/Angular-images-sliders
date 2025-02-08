import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { student } from './model';

@Component({
  selector: 'app-registeration',
  imports: [FormsModule],
  templateUrl: './registeration.component.html',
  styleUrl: './registeration.component.css'
})
export class RegisterationComponent {
  name = "";
  age = "";
  student: any;
  counter = 1;
  @Output() studentEvent = new EventEmitter<student>();
  Add(){
    let id = this.counter++;
    let newStudent : student = {id : id, name : this.name, age: +this.age}
    if(this.isValidName(this.name) && this.validAge(+this.age)){
      this.studentEvent.emit(newStudent);
      console.log(newStudent);
      // this.Students.push(newStudent);
    }
  }

  isValidName(name: string): boolean{
    return this.name.length > 2;
  }
  validAge(age: number) : boolean{
    return (+this.age > 20 && +this.age < 40);
  }
}


