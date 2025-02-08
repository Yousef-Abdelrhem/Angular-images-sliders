import { Component, Input } from '@angular/core';
import { student } from '../registeration/model';

@Component({
  selector: 'app-student',
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  @Input() Students : student[] =[{ id: 0 , age: 0, name:''}];

    
  ngOnInit(): void {
    
    
  }
}
