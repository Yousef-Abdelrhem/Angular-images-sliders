import { Component, EventEmitter, Output } from '@angular/core';
import { student } from './model';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, FormsModule, Validators, ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  imports: [  CommonModule,
    FormsModule, ReactiveFormsModule ],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  student: any;
  counter = 1;
  @Output() studentEvent = new EventEmitter<student>();

  Form = new FormGroup({
    name: new FormControl(null, [Validators.required ,Validators.minLength(3)]),
    age : new FormControl(null,[Validators.required , Validators.min(20), Validators.max(40)])
  });
  Add(){
    console.log(this.Form.controls['age'].value);
    if(this.Form.valid){
      let id = this.counter++;
      let {name , age} =  this.Form.value;
      if (name && age) {
        let newStudent  = {id : id, name: name as string, age: age as number}; /// ???
        console.log(newStudent);
        this.studentEvent.emit(newStudent);
      }
    }
    }

}
